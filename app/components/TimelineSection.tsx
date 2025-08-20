import React from "react";
import styles from "../styles/timeline.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { Heading } from "./Heading";

type TimelineItem = {
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  time: string;
  content?: () => JSX.Element;
};

const timeline: TimelineItem[] = [
  {
    description: "High School",
    icon: FaGraduationCap,
    time: "2015 - 2017",
  },

  {
    description: "University Of Technology - Yatanarpon Cyber City",
    icon: FaGraduationCap,
    time: "2017 - 2020",
  },

  {
    description: "Associate Developer at Partner Associates",
    icon: FaBriefcase,
    time: "Apr 2024 - Nov 2024",
    content: () => (
      <h3 className="mb-2 font-semibold">
        Associate Developer at&nbsp;
        <a
          href="https://www.partnerassociates.com/home"
          style={{ color: "#6d93cb" }}
          target="_blank"
          rel=""
        >
          Partner Associates
        </a>
      </h3>
    ),
  },

  {
    description: "Full-stack Developer at Blue Ocean",
    icon: FaBriefcase,
    time: "Jan 2025 - June 2025",
    content: () => (
      <h3 className="mb-2 font-semibold">
        Full-stack Developer at&nbsp;
        <a
          href="https://blueoceanmm.com/"
          style={{ color: "#6d93cb" }}
          target="_blank"
          rel=""
        >
          Blue Ocean
        </a>
      </h3>
    ),
  },

  {
    description: "Full-stack Web Developer at Plus Impact",
    icon: FaBriefcase,
    time: "August 2025 - Present",
    content: () => (
      <h3 className="mb-2 font-semibold">
        Full-stack Web Developer at&nbsp;
        <a
          href="https://www.plustalent.co/"
          style={{ color: "#6d93cb" }}
          target="_blank"
          rel=""
        >
          Plus Impact
        </a>
      </h3>
    ),
  },
];

function TimelineSection() {
  return (
    <section
      className={`${styles.timeline} mb-36 mt-[90px] scroll-mt-20`}
      id="timeline"
    >
      <Heading title="Timeline" description="My Timeline:" />

      <div className="flex justify-center">
        <div className="relative w-4/5 lg:w-3/4">
          <div
            className={`${styles["center-line"]} bg-gray-200 dark:bg-gray-200`}
          ></div>

          {timeline.map(({ icon: Icon, description, time, content }, index) => {
            return (
              <div
                className={`${
                  styles[`${index % 2 === 0 ? "left" : "right"}`]
                } mt-10 lg:mx-10`}
                key={index}
              >
                <div
                  className={`${styles.content} shadow-neuro-dark dark:shadow-neuro-dark`}
                >
                  <i className={`theme shadow-md relative`}>
                    <Icon className="text-2xl absolute left-[5px] top-1" />
                  </i>

                  {content && typeof content === "function" ? (
                    content()
                  ) : (
                    <h3 className="mb-2 font-semibold">{description}</h3>
                  )}

                  <p className="text-secondary">{time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
