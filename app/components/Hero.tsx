import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
    return (
        <section className="flex flex-col gap-8 items-center justify-center text-center max-w-4xl ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-100">
                Transforme sua ideia em{" "}
                <span className="text-yellow-300">projeto real</span> com tecnologia de ponta
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Consultoria especializada, desenvolvimento de sites e sistemas, sempre com foco em
                qualidade, escalabilidade e melhores práticas de arquitetura e padrões de projeto.
            </p>

            <div className="flex flex-row justify-between gap-6">
                <a
                    href="https://www.linkedin.com/in/elencio-calado-zivane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 text-gray-300 underline hover:text-blue-400 text-xl md:text-2xl transition"
                >
                    <SiLinkedin />
                    <span className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">elêncio Calado Zivane</span>
                </a>
                <a
                    href="https://github.com/elencio-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex flex-row items-center gap-2 text-gray-300 underline hover:text-blue-400 text-2xl transition"
                >
                    <SiGithub />
                    <span className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">elencio-dev</span>
                </a>
            </div>
        </section>
    )
}