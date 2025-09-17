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


export default function LanguageCarousel() {
  
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-wrap items-center justify-center gap-8 "
      >
        {[...languages].map((lang, i) => (
          <div
            key={lang.name + i}
            className="cursor-pointer flex flex-col items-center border-3 bg-gray-900 border-gray-700 rounded-lg p-4 hover:scale-110 transform transition duration-300"
          >
            <div className={`text-8xl mb-3 ${lang.color}`}>{lang.icon}</div>
            <p className="text-gray-300 font-semibold">{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
