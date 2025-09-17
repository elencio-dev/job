import { Link } from "react-router";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-6">
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight text-gray-100">
                Transforme sua ideia em{" "}
                <span className="text-yellow-300">projeto real</span> com tecnologia de ponta
            </h2>

            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Consultoria especializada, desenvolvimento de sites e sistemas, sempre com foco em
                qualidade, escalabilidade e melhores práticas de arquitetura e padrões de projeto.
            </p>
        </section>
    )
}