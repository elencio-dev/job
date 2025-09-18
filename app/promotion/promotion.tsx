import { SiLinkedin, SiGithub } from "react-icons/si";
import Hero from "~/components/Hero";
import LanguageOrbit from "~/components/LanguageOrbit";

export default function Promotion() {
  return (
    <section
      id="tech"
      className="flex mx-auto flex-col gap-12 items-center justify-center text-center p-6"
    >
      <Hero />
      <LanguageOrbit />
    </section>
  );
}
