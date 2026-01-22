import Link from "next/link";
import Image from "next/image";
import image1 from "@/assets/projects/theme.png";
export default function ProjectCard() {
  return (
    <div className="px-4 py-3 border border-[#1c1c1c] rounded-xl">
      <h1>project</h1>
      <div className="relative w-full rounded-md aspect-3/2 overflow-hidden">
        <Image src={image1} alt="Picture" fill className="object-cover" />
      </div>
    </div>
  );
}
