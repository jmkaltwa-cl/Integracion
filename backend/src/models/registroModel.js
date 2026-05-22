import mongoose from "mongoose";

const registroSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    carrera: {
      type: String,
      required: true,
      trim: true,
    },
    tipoEntrada: {
      type: String,
      required: true,
      trim: true,
    },
    taller: {
      type: String,
      required: true,
      trim: true,
    },
    comentarios: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Registro", registroSchema);
