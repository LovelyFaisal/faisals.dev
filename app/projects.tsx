import ProjectCard from "@/components/projectCard";
import { StaticImageData } from "next/image";
import image1 from "@/assets/projects/theme.png";
import image2 from "@/assets/projects/vision-landing.png";
export interface Project {
  title: string;
  image: StaticImageData;
  description: string;
  tags: string[];
  demo: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "رؤية ثيم سلة",
    image: image1,
    description:
      "ثيم رؤية على منصة سلة هو ثيم متجر إلكتروني حديث ومتجاوب، يعيد تصميم واجهة المستخدم للمتجر الالكتروني بتصميم جذاب ويستهدف متاجر الالكترونيات.",
    tags: ["HTML/CSS", "Twig", "JavaScript", "Tailwind CSS"],
    demo: "https://demostore.salla.sa/dev-jejh5blkrkcrcr5t",
  },
  {
    title: "صفحة هبوط رؤية",
    image: image2,
    description:
      "صفحة هبوط حديثة وجذابة لثيم رؤية على سلة، تم تصميمها باستخدام Next.js وTailwind CSS لتوفير تجربة مستخدم سلسة ومتجاوبة.",
    tags: ["Astro.js", "TypeScript", "Tailwind CSS", "HTML"],
    demo: "https://lovelyfaisal.github.io/vision-landing/",
    github: "https://github.com/lovelyfaisal/vision-landing",
  },
];
export default function Projects() {
  return (
    <section className="flex flex-col gap-6 py-10" id="projects">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">المشاريع</h2>
        <p className="text-[#64748B] text-sm">
          مجموعة مختاره من المشاريع التي قمت ببنائها
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
