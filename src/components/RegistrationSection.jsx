import { useState } from "react";
import { useRegistro } from "../context/RegistroContext";

const initialForm = {
  nombre: "",
  correo: "",
  carrera: "",
  tipoEntrada: "",
  taller: "",
  comentarios: "",
};

function correoValido(correo) {
  return correo.includes("@") && correo.includes(".");
}

function RegistrationSection() {
  const [formData, setFormData] = useState(initialForm);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });
  const [enviando, setEnviando] = useState(false);
  const { createRegistro } = useRegistro();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (formData.nombre.trim().length < 3) {
      setMensaje({
        tipo: "error",
        texto: "Escribe tu nombre completo (mínimo 3 caracteres).",
      });
      return;
    }
    if (!correoValido(formData.correo.trim())) {
      setMensaje({ tipo: "error", texto: "Escribe un correo válido." });
      return;
    }
    if (formData.carrera.trim().length < 3) {
      setMensaje({
        tipo: "error",
        texto: "Escribe tu carrera (mínimo 3 caracteres).",
      });
      return;
    }
    if (formData.tipoEntrada === "") {
      setMensaje({ tipo: "error", texto: "Selecciona el tipo de entrada." });
      return;
    }
    if (formData.taller === "") {
      setMensaje({ tipo: "error", texto: "Selecciona un taller." });
      return;
    }

    try {
      setEnviando(true);
      const res = await createRegistro({
        nombre: formData.nombre.trim(),
        correo: formData.correo.trim(),
        carrera: formData.carrera.trim(),
        tipoEntrada: formData.tipoEntrada,
        taller: formData.taller,
        comentarios: formData.comentarios.trim(),
      });

      setMensaje({
        tipo: "ok",
        texto: `¡Listo! Inscripción enviada. Te contactaremos a: ${res.data.correo || formData.correo.trim()}`,
      });
      setFormData(initialForm);
    } catch (_error) {
      setMensaje({
        tipo: "error",
        texto: "No fue posible conectar con el servidor backend.",
      });
    } finally {
      setEnviando(false);
    }
  };

  const rellenarEjemplo = () => {
    setFormData({
      nombre: "José Kaltwasser",
      correo: "j.kaltwasser@uandresbello.edu",
      carrera: "Ingeniería en Computación e Informática",
      tipoEntrada: "estudiante",
      taller: "web",
      comentarios:
        "Me interesa aprender a maquetar una landing en un solo HTML.",
    });
    setMensaje({
      tipo: "ok",
      texto: "Datos de ejemplo cargados. Ahora puedes enviar.",
    });
  };

  return (
    <section
      id="inscripcion"
      aria-labelledby="tituloInscripcion"
      className="my-[14px] scroll-mt-24 rounded-xl border border-[#e6eaf2] bg-white p-4"
    >
      <h2 id="tituloInscripcion" className="mb-[10px] text-xl font-bold">
        Formulario de inscripción
      </h2>

      <form onSubmit={onSubmit} autoComplete="on">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="mb-[6px] block text-[13px] font-bold">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ej: José Pérez"
              value={formData.nombre}
              onChange={onChange}
              className="w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            />
          </div>
          <div>
            <label htmlFor="correo" className="mb-[6px] block text-[13px] font-bold">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="Ej: jose@email.com"
              value={formData.correo}
              onChange={onChange}
              className="w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            />
          </div>
          <div>
            <label htmlFor="carrera" className="mb-[6px] block text-[13px] font-bold">
              Carrera
            </label>
            <input
              id="carrera"
              name="carrera"
              type="text"
              placeholder="Ej: Ingeniería Informática"
              value={formData.carrera}
              onChange={onChange}
              className="w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="tipoEntrada"
              className="mb-[6px] block text-[13px] font-bold"
            >
              Tipo de entrada
            </label>
            <select
              id="tipoEntrada"
              name="tipoEntrada"
              value={formData.tipoEntrada}
              onChange={onChange}
              className="w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            >
              <option value="">Selecciona una opción</option>
              <option value="estudiante">Estudiante</option>
              <option value="docente">Docente</option>
              <option value="externo">Externo</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="taller" className="mb-[6px] block text-[13px] font-bold">
              Taller que te interesa
            </label>
            <select
              id="taller"
              name="taller"
              value={formData.taller}
              onChange={onChange}
              className="w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            >
              <option value="">Selecciona un taller</option>
              <option value="web">Desarrollo web y mobile</option>
              <option value="ia">Programación con IA - view coding</option>
              <option value="leyes">Leyes en el contexto de la TI</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="comentarios"
              className="mb-[6px] block text-[13px] font-bold"
            >
              Comentarios (opcional)
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              placeholder="Ej: Necesito constancia de asistencia..."
              value={formData.comentarios}
              onChange={onChange}
              className="min-h-[90px] w-full resize-y rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none"
            />
          </div>
        </div>

        <div className="mt-[10px] flex flex-wrap gap-[10px]">
          <button
            type="submit"
            disabled={enviando}
            className="cursor-pointer rounded-[10px] border-0 bg-[#0f2a55] px-[14px] py-[10px] font-bold text-white"
          >
            {enviando ? "Enviando..." : "Enviar inscripción"}
          </button>
          <button
            type="button"
            onClick={rellenarEjemplo}
            className="cursor-pointer rounded-[10px] border border-[#ccd3e3] bg-[#e9eef9] px-[14px] py-[10px] font-bold text-[#0f2a55]"
          >
            Rellenar ejemplo
          </button>
          <button
            type="reset"
            onClick={() => {
              setFormData(initialForm);
              setMensaje({ tipo: "", texto: "" });
            }}
            className="cursor-pointer rounded-[10px] border border-[#ccd3e3] bg-[#e9eef9] px-[14px] py-[10px] font-bold text-[#0f2a55]"
          >
            Limpiar
          </button>
        </div>

        {mensaje.texto ? (
          <div
            role="status"
            aria-live="polite"
            className={`mt-3 rounded-[10px] p-[10px] text-sm ${
              mensaje.tipo === "ok"
                ? "border border-[#bfe7cb] bg-[#eaf8ef] text-[#165a2c]"
                : "border border-[#ffb9b9] bg-[#ffecec] text-[#7a1414]"
            }`}
          >
            {mensaje.texto}
          </div>
        ) : null}
      </form>
    </section>
  );
}

export default RegistrationSection;
