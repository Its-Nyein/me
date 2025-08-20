import React from "react";
import { Heading } from "./Heading";
import { skills } from "@/data/skillsData";

function SkillSection() {
  return (
    <section className="mt-[90px] scroll-mt-20" id="skills">
      <Heading title="Skills" description="My current stack are:" />
      <div className="space-y-6">
        {Object.values(skills).map((cate) => {
          return (
            <div key={cate.title}>
              <p className="mb-3 mt-3">{cate.title}</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
                {cate.stacks.map(({ icon: Icon, stack, color }) => {
                  return (
                    <li
                      key={stack}
                      className="h-32 w-32 flex-col grid-flow-col bg-dark border border-zinc-800 p-4 inline-flex gap-2 items-center justify-center rounded-full shadow-neuro-inset-dark dark:shadow-neuro-inset-dark"
                    >
                      <Icon
                        className="text-4xl shrink-0 mb-2"
                        style={{ color: color }}
                      />
                      {stack}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillSection;
