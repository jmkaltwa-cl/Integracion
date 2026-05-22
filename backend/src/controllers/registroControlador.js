import Registro from "../models/registroModel.js";

export const getRegistros = async (_req, res) => {
  try {
    const registros = await Registro.find().sort({ createdAt: -1 });
    res.json(registros);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener registros" });
  }
};

export const getRegistro = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) return res.status(404).json({ message: "No encontrado" });
    res.json(registro);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener registro" });
  }
};

export const createRegistro = async (req, res) => {
  try {
    const { nombre, correo, carrera, tipoEntrada, taller, comentarios } = req.body;

    if (!nombre || !correo || !carrera || !tipoEntrada || !taller) {
      return res.status(400).json({
        message:
          "Faltan campos obligatorios: nombre, correo, carrera, tipoEntrada, taller",
      });
    }

    const nuevoRegistro = new Registro({
      nombre,
      correo,
      carrera,
      tipoEntrada,
      taller,
      comentarios,
    });

    const registroGuardado = await nuevoRegistro.save();
    res.status(201).json(registroGuardado);
  } catch (error) {
    console.error("Error createRegistro:", error.message);
    res.status(500).json({
      message: "Error al crear registro",
      detalle: error.message,
    });
  }
};

export const updateRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!registro) return res.status(404).json({ message: "No encontrado" });
    res.json(registro);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar registro" });
  }
};

export const deleteRegistro = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndDelete(req.params.id);
    if (!registro) return res.status(404).json({ message: "No encontrado" });
    res.json(registro);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar registro" });
  }
};
