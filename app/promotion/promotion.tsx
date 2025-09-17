import { SiLinkedin, SiGithub } from "react-icons/si";
import Hero from "~/components/Hero";
import LanguageOrbit from "~/components/LanguageOrbit";

export default function Promotion() {
  return (
    <section
      id="tech"
      className="h-screen flex mx-auto flex-col gap-12 items-center justify-center text-center p-6 relative"
    >
      <div className="absolute top-6 flex gap-6">
        <a
          href="https://www.linkedin.com/in/elencio-calado-zivane/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 text-gray-300 underline hover:text-blue-400 text-2xl transition"
        >
          <SiLinkedin />
           <span>elêncio Calado Zivane</span>
        </a>
        <a
          href="https://github.com/elencio-dev"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex flex-row items-center gap-2 text-gray-300 underline hover:text-white text-2xl transition"
        >
          <SiGithub />
          <span>elencio-dev</span>
        </a>
      </div>

      {/* Conteúdo */}
      <Hero />
      <LanguageOrbit />
    </section>
  );
}
