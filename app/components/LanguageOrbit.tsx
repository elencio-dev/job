import { 
  SiReact, SiNodedotjs, SiPython, SiDocker, SiAngular, SiVuedotjs, 
  SiTypescript, SiHtml5, SiCss3,  SiMysql, SiGraphql, 
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, 
  SiGit, SiGithub, SiGitlab, SiFigma
} from "react-icons/si";
import type { JSX } from "react/jsx-runtime";

interface Tech {
  name: string;
  icon: JSX.Element;
  color: string;
}

const languagesAndMarkup: Tech[] = [
  { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "SQL", icon: <SiMysql />, color: "text-amber-600" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
];


const frameworksAndTools: Tech[] = [
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text dark:text-white" },
  { name: "Angular", icon: <SiAngular />, color: "text-red-600" },
  { name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Git", icon: <SiGit />, color: "text-orange-600" },
  { name: "GitHub", icon: <SiGithub />, color: "text-gray-300 dark:text-white" },
  { name: "GitLab", icon: <SiGitlab />, color: "text-orange-500" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
];

function TechGrid({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div className="mb-12 w-full">
      <h3 className="text-xl font-bold text-gray-200 mb-6 text-center">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {items.map((tech, i) => (
          <div
            key={tech.name + i}
            className="cursor-pointer flex flex-col items-center border bg-gray-900 border-gray-700 rounded-lg p-4 hover:scale-110 transform transition duration-300"
          >
            <div className={`text-5xl mb-3 ${tech.color}`}>{tech.icon}</div>
            <p className="text-gray-300 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LanguageCarousel() {
  return (
    <div className="flex flex-col items-center w-full">
      <TechGrid title="Linguagens & Marcação" items={languagesAndMarkup} />
      <TechGrid title="Frameworks, Bibliotecas & Ferramentas" items={frameworksAndTools} />
    </div>
  );
}
