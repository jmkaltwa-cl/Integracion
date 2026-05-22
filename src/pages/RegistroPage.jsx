import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRegistro } from "../context/RegistroContext";
import Footer from "../components/Footer";

const inputClass =
  "w-full rounded-[10px] border border-[#ccd3e3] bg-white p-[10px] text-sm outline-none";
const labelClass = "mb-[6px] block text-[13px] font-bold";

function RegistroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createRegistro, getRegistro, updateRegistro } = useRegistro();
  const navigate = useNavigate();
  const params = useParams();
  const isEdit = Boolean(params.id);

  useEffect(() => {
    async function loadRegistro() {
      if (params.id) {
        const registro = await getRegistro(params.id);
        if (registro) {
          setValue("nombre", registro.nombre);
          setValue("correo", registro.correo);
          setValue("carrera", registro.carrera);
          setValue("tipoEntrada", registro.tipoEntrada);
          setValue("taller", registro.taller);
          setValue("comentarios", registro.comentarios);
        }
      }
    }
    loadRegistro();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateRegistro(params.id, data);
    } else {
      await createRegistro(data);
    }
    navigate("/registros");
  });

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1e2430]">
      <header className="bg-[#0f2a55] px-4 py-6 text-white">
        <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">
            {isEdit ? "Editar inscripción" : "Nueva inscripción"}
          </h1>
          <Link
            to="/registros"
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-bold text-white no-underline hover:bg-white/20"
          >
            Volver al listado
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[980px] px-4 py-6">
        <section className="rounded-xl border border-[#e6eaf2] bg-white p-4">
          <h2 className="mb-4 text-xl font-bold">Formulario de inscripción</h2>

          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label className={labelClass}>Nombre completo</label>
                <input
                  type="text"
                  {...register("nombre", { required: true })}
                  className={inputClass}
                  placeholder="Ej: José Pérez"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-[#7a1414]">Escriba el nombre</p>
                )}
              </div>
              <div>
                <label className={labelClass}>Correo</label>
                <input
                  type="email"
                  {...register("correo", { required: true })}
                  className={inputClass}
                  placeholder="Ej: jose@email.com"
                />
                {errors.correo && (
                  <p className="mt-1 text-sm text-[#7a1414]">Escriba el correo</p>
                )}
              </div>
              <div>
                <label className={labelClass}>Carrera</label>
                <input
                  type="text"
                  {...register("carrera", { required: true })}
                  className={inputClass}
                  placeholder="Ej: Ingeniería Informática"
                />
                {errors.carrera && (
                  <p className="mt-1 text-sm text-[#7a1414]">Escriba la carrera</p>
                )}
              </div>
              <div>
                <label className={labelClass}>Tipo de entrada</label>
                <select
                  {...register("tipoEntrada", { required: true })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="estudiante">Estudiante</option>
                  <option value="docente">Docente</option>
                  <option value="externo">Externo</option>
                </select>
                {errors.tipoEntrada && (
                  <p className="mt-1 text-sm text-[#7a1414]">
                    Seleccione el tipo de entrada
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Taller que te interesa</label>
                <select
                  {...register("taller", { required: true })}
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona un taller
                  </option>
                  <option value="web">Desarrollo web y mobile</option>
                  <option value="ia">Programación con IA - view coding</option>
                  <option value="leyes">Leyes en el contexto de la TI</option>
                </select>
                {errors.taller && (
                  <p className="mt-1 text-sm text-[#7a1414]">Seleccione un taller</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Comentarios (opcional)</label>
                <textarea
                  {...register("comentarios")}
                  className={`${inputClass} min-h-[90px] resize-y`}
                  placeholder="Ej: Necesito constancia de asistencia..."
                  rows={3}
                />
              </div>
            </div>

            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <button
                type="submit"
                className="cursor-pointer rounded-[10px] border-0 bg-[#0f2a55] px-[14px] py-[10px] font-bold text-white"
              >
                Guardar
              </button>
              <Link
                to="/registros"
                className="rounded-[10px] border border-[#ccd3e3] bg-[#e9eef9] px-[14px] py-[10px] font-bold text-[#0f2a55] no-underline"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RegistroPage;
