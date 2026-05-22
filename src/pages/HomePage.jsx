import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import ProgramSection from "../components/ProgramSection";
import SpeakersSection from "../components/SpeakersSection";
import RegistrationSection from "../components/RegistrationSection";
import Footer from "../components/Footer";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#1e2430]">
      <Hero />
      <main className="mx-auto w-full max-w-[980px] px-4 pb-7 pt-[18px]">
        <ProgramSection />
        <SpeakersSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
