import { Link } from "react-router-dom";
import logoUnab from "../assets/logo-unab.png";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Hero() {
  return (
    <header className="bg-[#0f2a55] px-4 py-6 text-white">
      <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 text-3xl font-bold">
            Congreso Universitario de Tecnología 2026
          </h1>
          <p className="my-1 leading-[1.4]">
            <b>Fecha:</b> 26 de marzo de 2026 · <b>Horario:</b> 09:00 a 18:30
          </p>
          <span className="mt-2 inline-block rounded-full bg-[#ffcc66] px-[10px] py-[6px] text-sm font-bold text-[#222]">
            Entrada liberada (cupos limitados)
          </span>
        </div>

        <div className="max-w-[320px] text-left md:text-right">
          <img
            src={logoUnab}
            alt="Universidad Andrés Bello — Unab Online"
            className="mb-3 block h-auto w-full rounded-[10px] bg-white px-[14px] py-[10px] md:ml-auto"
          />
          <p className="m-0 opacity-90">
            <b>Universidad:</b> U. Andrés Bello
          </p>
          <p className="mt-[6px] opacity-90">
            <b>Tema 2026:</b> IA, Web y Mobile, Leyes
          </p>
        </div>
      </div>

      <div className="mx-auto mt-3 w-full max-w-[980px]">
        <nav aria-label="Navegación principal">
          <button
            type="button"
            onClick={() => scrollToSection("programa")}
            className="mr-3 inline-block cursor-pointer rounded-md border-0 bg-transparent px-2 py-1.5 text-white transition hover:bg-white/10"
          >
            Programa
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("expositores")}
            className="mr-3 inline-block cursor-pointer rounded-md border-0 bg-transparent px-2 py-1.5 text-white transition hover:bg-white/10"
          >
            Expositores
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("inscripcion")}
            className="mr-3 inline-block cursor-pointer rounded-md border-0 bg-transparent px-2 py-1.5 text-white transition hover:bg-white/10"
          >
            Inscripción
          </button>
          <Link
            to="/registros"
            className="inline-block rounded-md px-2 py-1.5 text-white no-underline transition hover:bg-white/10"
          >
            Ver inscripciones
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Hero;
