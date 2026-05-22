const programItems = [
  { hora: "09:00", actividad: "Acreditación + bienvenida", sala: "Recepción" },
  { hora: "10:00", actividad: "Taller: “Desarrollo web y mobile”", sala: "Lab 1" },
  {
    hora: "12:00",
    actividad: "Taller: “Programación con IA - view coding”",
    sala: "Lab 2",
  },
  {
    hora: "15:00",
    actividad: "Taller: Leyes en el contexto de la TI”",
    sala: "Lab 3",
  },
  {
    hora: "17:00",
    actividad: "Panel: Empleabilidad Tech 2026 (preguntas abiertas)",
    sala: "Auditorio",
  },
];

function ProgramSection() {
  return (
    <section
      id="programa"
      aria-labelledby="tituloPrograma"
      className="my-[14px] scroll-mt-24 rounded-xl border border-[#e6eaf2] bg-white p-4"
    >
      <h2 id="tituloPrograma" className="mb-[10px] text-xl font-bold">
        Programa
      </h2>
      <p className="mt-0 text-[#3a4357]">Talleres introductorios.</p>

      <div className="mt-[10px] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-[#e6eaf2] bg-[#f2f5fb] p-[10px] text-left text-sm">
                Hora
              </th>
              <th className="border border-[#e6eaf2] bg-[#f2f5fb] p-[10px] text-left text-sm">
                Actividad
              </th>
              <th className="border border-[#e6eaf2] bg-[#f2f5fb] p-[10px] text-left text-sm">
                Sala
              </th>
            </tr>
          </thead>
          <tbody>
            {programItems.map((item) => (
              <tr key={`${item.hora}-${item.sala}`}>
                <td className="border border-[#e6eaf2] p-[10px] text-sm">{item.hora}</td>
                <td className="border border-[#e6eaf2] p-[10px] text-sm">
                  {item.actividad}
                </td>
                <td className="border border-[#e6eaf2] p-[10px] text-sm">{item.sala}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProgramSection;
