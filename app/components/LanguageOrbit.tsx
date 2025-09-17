import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiGraphql,
} from "react-icons/si";
import type { JSX } from "react/jsx-runtime";

interface Language {
  name: string;
  icon: JSX.Element;
  color: string;
}

const languages: Language[] = [
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
  { name: "Angular", icon: <SiAngular />, color: "text-red-600" },
  { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
  { name: "PHP", icon: <SiPhp />, color: "text-indigo-500" },
  { name: "SQL", icon: <SiMysql />, color: "text-amber-600" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
];

interface Props {
  selected: string | null;
  setSelected: (lang: string) => void;
}

export default function LanguageCarousel({ selected, setSelected }: Props) {
  const [offset, setOffset] = useState(0);
  const requestRef = useRef<number | null>(null);

  // largura total dos cards (ajuste conforme o padding/margem dos itens)
  const itemWidth = 160; // aprox. largura de cada card
  const totalWidth = languages.length * itemWidth;

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - 0.4;
        return Math.abs(newOffset) >= totalWidth ? 0 : newOffset;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [totalWidth]);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        className="flex gap-6"
        style={{
          transform: `translateX(${offset}px)`,
          width: totalWidth * 2, // duplicar lista para efeito infinito
        }}
      >
        {[...languages, ...languages].map((lang, i) => (
          <div
            key={lang.name + i}
            onClick={() => setSelected(lang.name)}
            className={`flex flex-col items-center justify-center w-36 p-6 rounded-xl shadow-md cursor-pointer transition-transform duration-300
              ${selected === lang.name ? "scale-110 ring-2 ring-yellow-400" : "hover:scale-105"}
              bg-white`}
          >
            <div className={`text-5xl mb-3 ${lang.color}`}>{lang.icon}</div>
            <p className="text-gray-800 font-semibold">{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
