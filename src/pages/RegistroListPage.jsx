import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRegistro } from "../context/RegistroContext";
import RegistroTarj from "../components/RegistroTarj";
import Footer from "../components/Footer";

function RegistroListPage() {
  const { getRegistros, registros } = useRegistro();

  useEffect(() => {
    getRegistros();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1e2430]">
      <header className="bg-[#0f2a55] px-4 py-6 text-white">
        <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Inscripciones registradas</h1>
          <Link
            to="/"
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-bold text-white no-underline hover:bg-white/20"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[980px] px-4 py-6">
        <section className="rounded-xl border border-[#e6eaf2] bg-white p-4">
          <h2 className="mb-4 text-xl font-bold">Listado CRUD</h2>

          {!registros || registros.length === 0 ? (
            <p className="text-[#3a4357]">No hay inscripciones disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {registros.map((item) => (
                <RegistroTarj registro={item} key={item._id} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default RegistroListPage;
