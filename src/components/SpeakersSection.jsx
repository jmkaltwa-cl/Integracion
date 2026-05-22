const speakers = [
  {
    nombre: "Jerry Jesus Peña Morales",
    area: "TI",
    taller: "Desarrollo web y mobile",
  },
  {
    nombre: "Joseph Venegas",
    area: "IA",
    taller: "Programación con IA - view coding",
  },
  {
    nombre: "Julio Ruiz Pino",
    area: "Derecho TI",
    taller: "Leyes en el contexto de la TI",
  },
];

function SpeakersSection() {
  return (
    <section
      id="expositores"
      aria-labelledby="tituloExpositores"
      className="my-[14px] scroll-mt-24 rounded-xl border border-[#e6eaf2] bg-white p-4"
    >
      <h2 id="tituloExpositores" className="mb-[10px] text-xl font-bold">
        Expositores
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {speakers.map((speaker) => (
          <article
            key={speaker.nombre}
            className="rounded-xl border border-[#e6eaf2] bg-[#fbfcff] p-3"
          >
            <h3 className="mb-[6px] text-base font-bold">{speaker.nombre}</h3>
            <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
              <b>Área:</b> {speaker.area}
            </p>
            <p className="my-[6px] text-sm leading-[1.4] text-[#3a4357]">
              <b>Taller:</b> {speaker.taller}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SpeakersSection;
