import Hero from "~/components/Hero";
import LanguageOrbit from "~/components/LanguageOrbit";

export default function Promotion() {

  return (
    <section id="tech" className="h-screen flex mx-auto flex-col items-center justify-center text-center p-6">
      <Hero />
      <LanguageOrbit />
    </section>
  );
}
