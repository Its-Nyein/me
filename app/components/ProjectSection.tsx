"use client";
import { projects } from "@/data/projectData";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";
import Image from "next/image";
import { useState } from "react";

export function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const toogleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="project" className="scroll-mt-28">
      <Heading title="Projects" description="Some projects I've built:" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0, showAll ? projects.length : 6).map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
      <div className="flex mt-10 justify-center">
        <button onClick={toogleShowAll} className="border rounded-md py-3 px-6">
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}

interface IProjectCard {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: IProjectCard) {
  return (
    <div className="bg-dark border border-zinc-800 overflow-hidden cursor-pointer shadow-md rounded-md">
      <div>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="w-full h-auto object-cover object-center"
        />
      </div>
      <div className="py-4 mx-8">
        <ul className="flex flex-wrap gap-4 mb-3">
          {project.stacks.map((stack) => {
            return (
              <li
                key={stack}
                className="px-4 py-1 text-xs border border-zinc-700 text-zinc-400 rounded-md"
              >
                {stack}
              </li>
            );
          })}
        </ul>
        <p className="text-lg font-medium">{project.title}</p>
        <p className="text-zinc-400 mt-3">{project.description}</p>
        <div className="flex gap-4 mt-4">
          <CustomLink href={project.sourceCode} linkType="secondary">
            Source Code
          </CustomLink>
          <CustomLink href={project.liveAt} linkType="secondary">
            Live At
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
