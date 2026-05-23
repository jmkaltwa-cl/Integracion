import { Link } from "react-router-dom";
import { useRegistro } from "../context/RegistroContext";

function RegistroTarj({ registro }) {
  const { deleteRegistro } = useRegistro();

  return (
    <article className="rounded-xl border border-[#e6eaf2] bg-[#fbfcff] p-3">
      <h3 className="mb-[6px] text-base font-bold">{registro.nombre}</h3>
      <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
        <b>Correo:</b> {registro.correo}
      </p>
      <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
        <b>Carrera:</b> {registro.carrera}
      </p>
      <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
        <b>Entrada:</b> {registro.tipoEntrada}
      </p>
      <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
        <b>Taller:</b> {registro.taller}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                `¿Eliminar la inscripción de ${registro.nombre}? Esta acción no se puede deshacer.`
              )
            ) {
              deleteRegistro(registro._id);
            }
          }}
          className="cursor-pointer rounded-[10px] border-0 bg-[#7a1414] px-3 py-2 text-sm font-bold text-white"
        >
          Eliminar
        </button>
        <Link
          to={`/registros/${registro._id}`}
          className="rounded-[10px] bg-[#0f2a55] px-3 py-2 text-sm font-bold text-white no-underline"
        >
          Editar
        </Link>
      </div>
    </article>
  );
}

export default RegistroTarj;
