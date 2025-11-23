import ProductCard from "./productCard";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TbApi } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import Image from "next/image";
export default function Products() {
  const skillCategories = [
    {
      name: "Languages",
      icon: <FaCode size={16} />,
      skills: [
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Python",
          icon: "python",
        },
      ],
    },
    {
      name: "Databases",
      icon: <FaDatabase size={16} />,
      skills: [
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "MongoDB",
          icon: "mongodb",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
      ],
    },
    {
      name: "Frameworks",
      icon: <BsStack size={16} />,
      skills: [
        {
          name: "Express",
          icon: "express/white",
        },
        {
          name: "Spring",
          icon: "spring",
        },
      ],
    },
    {
      name: "Tools & Technologies",
      icon: <HiOutlineWrenchScrewdriver size={16} />,
      skills: [
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Kubernetes",
          icon: "kubernetes",
        },
        {
          name: "Git",
          icon: "git",
        },
        {
          name: "Github",
          icon: "github/white",
        },
      ],
    },
    {
      name: "Backend & Infra",
      icon: <FaServer size={16} />,
      skills: [
        {
          name: "Nginx",
          icon: "nginx",
        },
        {
          name: "Caddy",
          icon: "caddy",
        },
        {
          name: "Kafka",
          icon: "apachekafka/white",
        },
      ],
    },
    {
      name: "API Management",
      icon: <TbApi size={16} />,
      skills: [
        {
          name: "Postman",
          icon: "postman",
        },
        {
          name: "Swagger",
          icon: "swagger",
        },
        {
          name: "GraphQL",
          icon: "graphql",
        },
      ],
    },
  ];
  return (
    <div>
      {/* <div className="flex flex-col gap-6 py-10">
        <div className="flex items-center gap-1">
          <h2 className="font-medium text-lg text-[#ededed]">Products</h2>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 9L14.25 9M14.25 9L9 3.75M14.25 9L9 14.25"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div className="flex gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div> */}

      <div className="grid grid-cols-3 gap-4" dir="ltr">
        {skillCategories.map((category) => {
          return (
            <div
              key={category.name}
              className="flex flex-col gap-4 px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#1c1c1c] hover:border-[#292929] transition-colors duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="bg-[#171717] p-2 flex items-center justify-center rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-lg">{category.name}</h2>
              </div>
              <div className="flex flex-wrap gap-1 text-xs">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex gap-2 justify-center items-center bg-[#171717] py-1.5 px-2 text-[#ababab] rounded-md"
                  >
                    <Image
                      alt="Products"
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      unoptimized
                      width={16}
                      height={16}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
