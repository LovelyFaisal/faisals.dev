import Link from "next/link";
import Image from "next/image";
import image1 from "@/assets/projects/theme.png";
import { FiGlobe } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/app/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="px-4 py-3 border border-white/5 hover:border-white/20 transition-all hover:scale-[100.5%] group rounded-xl duration-300 hover:bg-white/[2%]">
      <div className="relative w-full rounded-md aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt="Picture"
          fill
          className="object-cover"
        />
      </div>
      <div className="pb-4 pt-5 px-2">
        <h1 className="text-lg font-bold mb-3 group-hover:text-primary duration-300 transition-colors">
          {project.title}
        </h1>
        <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] font-mono font-medium text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-2 py-3 flex gap-2">
        <a
          href={project.demo}
          target="_blank"
          className="text-sm flex items-center gap-2 font-bold py-2 px-4 bg-primary hover:opacity-80 transition-opacity rounded-lg"
        >
          عرض المشروع
          <FiGlobe size={16} />
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-sm flex items-center gap-2 font-bold py-2 px-4 bg-[#0E0E11] border border-white/5 hover:border-white/20 transition-colors rounded-lg"
          >
            عرض الكود
            <FiGithub size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
