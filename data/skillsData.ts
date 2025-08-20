import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJenkins,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { FaBootstrap, FaNode } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

export const skills = {
  frontend: {
    title: "Frontend-",
    stacks: [
      {
        stack: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },

      {
        stack: "TypeScript",
        icon: SiTypescript,
        color: "#007acc",
      },

      {
        stack: "React",
        icon: FaReact,
        color: "#61DAFB",
      },

      {
        stack: "Next",
        icon: SiNextdotjs,
        color: "#000",
      },

      {
        stack: "Angular",
        icon: FaAngular,
        color: "#DD0031",
      },

      {
        stack: "VueJs",
        icon: FaVuejs,
        color: "#42B883",
      },

      {
        stack: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },

      {
        stack: "CSS",
        icon: FaCss3,
        color: "#1572B6",
      },

      {
        stack: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },

      {
        stack: "Bootstrap",
        icon: FaBootstrap,
        color: "#7952B3",
      },
    ],
  },
  backend: {
    title: "Backend-",
    stacks: [
      {
        stack: "NodeJs",
        icon: FaNode,
        color: "#339933",
      },

      {
        stack: "ExpressJs",
        icon: SiExpress,
        color: "#000000",
      },

      {
        stack: "NestJs",
        icon: SiNestjs,
        color: "#E0234E",
      },

      {
        stack: "Golang",
        icon: TbBrandGolang,
        color: "#00ADD8",
      },

      {
        stack: "MySQL",
        icon: GrMysql,
        color: "#4479A1",
      },

      {
        stack: "PostgreSQL",
        icon: BiLogoPostgresql,
        color: "#336791",
      },

      {
        stack: "MongoDB",
        icon: SiMongodb,
        color: "#589636",
      },

      {
        stack: "Firebase",
        icon: IoLogoFirebase,
        color: "#FFCA28",
      },

      {
        stack: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
    ],
  },
  server: {
    title: "Server - Containers - CI/CD",
    stacks: [
      {
        stack: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },

      {
        stack: "Docker",
        icon: FaDocker,
        color: "#2496ED",
      },

      {
        stack: "Jenkins",
        icon: FaJenkins,
        color: "#D24939",
      },

      {
        stack: "Nginx",
        icon: SiNginx,
        color: "#009639",
      },
    ],
  },
};
