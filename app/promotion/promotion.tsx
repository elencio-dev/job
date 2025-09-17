import { useState } from "react";
import LanguageOrbit from "~/components/LanguageOrbit";

export default function Promotion() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-[#243B4A] via-[#345657] to-[#1c2c34] text-white">
      <header className="flex justify-between items-center px-12 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">3AM</h1>
        {/* Botão de email */}
        <a
          href="mailto:caladojunior965@gmail.com"
          className="bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Contate-nos
        </a>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-10 px-6">
        <h2 className="text-2xl md:text-5xl font-extrabold max-w-4xl leading-tight">
          Transforme sua ideia em{" "}
          <span className="text-yellow-300">projeto real</span> com tecnologia de ponta
        </h2>
        <p className="mt-8 max-w-2xl text-xl md:text-xl text-gray-200 leading-relaxed">
          Consultoria especializada, desenvolvimento de sites e sistemas, sempre com foco em
          qualidade, escalabilidade e melhores práticas de arquitetura e padrões de projeto.
        </p>
      </section>

      <section id="tech" className="relative flex flex-col items-center py-16 px-6">
        <LanguageOrbit selected={selected} setSelected={setSelected} />
      </section>
    </div>
  );
}
