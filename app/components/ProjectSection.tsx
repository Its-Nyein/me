"use client";
import { projects } from "@/data/projectData";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";

export function ProjectSection() {
    return (
        <section id="project" className="scroll-mt-28">
            <Heading title="Projects" description="Some projects I've built:"/>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => {
                    return <ProjectCard key={project.title} project={project}/>
                })}
            </div>
            <div className="flex mt-10 justify-center">
                <CustomLink href="https://github.com/Its-Nyein" className="border rounded-md py-3 px-6" linkType="secondary">See More</CustomLink>
            </div>
        </section>
    )
}

interface IProjectCard {
    project: (typeof projects)[0]
}

function ProjectCard({project}: IProjectCard) {
    return <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer">
        <div>
            <img src={project.image} alt={project.title} width={400} height={400} className="w-full h-full object-cover"/>
        </div>
        <div className="py-4 mx-8">
            <ul className="flex gap-4 mb-3">
                {project.stacks.map(stack => {
                    return <li key={stack} className="px-4 py-1 text-xs border border-zinc-700 text-zinc-400 rounded-md">{stack}</li>
                })}
            </ul>
            <p className="text-lg font-medium">{project.title}</p>
            <p className="text-zinc-400 mt-3">{project.description}</p>
            <div className="flex gap-4 mt-4">
                <CustomLink href={project.sourceCode} linkType="secondary">Source Code</CustomLink>
                <CustomLink href={project.liveAt} linkType="secondary">Live At</CustomLink>
            </div>
        </div>
    </div>
}