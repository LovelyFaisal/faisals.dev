import Heading from "@/components/heading";
import Link from "next/link";
import ProjectCard from "@/components/projectCard";
export default function Projects() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-1">
        <Link href="/projects">
          <Heading title="مشاريعي" />
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
