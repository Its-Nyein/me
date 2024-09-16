import { FaReact, FaHtml5,FaCss3, FaPhp, FaLaravel, FaPython, FaAngular, FaNodeJs  } from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiMongodb
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from 'react-icons/si';


export const skills = {
    frontend: {
        title: "Frontend-",
        stacks: [
            {
                stack: "JavaScript",
                icon: SiJavascript,
                color: '#F7DF1E'
            },

            {
                stack: "TypeScript",
                icon: SiTypescript,
                color: '#007acc'
            },

            {
                stack: "React.js",
                icon: FaReact,
                color: '#61DAFB'
            },

            {
                stack: "Angular",
                icon: FaAngular,
                color: '#DD0031'
            },

            {
                stack: "HTML5",
                icon: FaHtml5,
                color: '#E34F26'
            },

            {
                stack: "CSS",
                icon: FaCss3,
                color: '#1572B6'
            },

            {
                stack: "Tailwind CSS",
                icon: SiTailwindcss,
                color: '#06B6D4'
            },

            {
                stack: "Bootstrap",
                icon: FaBootstrap,
                color: '#7952B3'
            },
        ]
    },
    backend: {
        title: "Backend-",
        stacks: [
            {
                stack: "NodeJs",
                icon: FaNodeJs,
                color: '#68A063'
            },

            // {
            //     stack: "ExpressJs",
            //     icon:
            // },

            // {
            //     stack: "PHP",
            //     icon: FaPhp,
            //     color: '#4F5B93'
            // },

            // {
            //     stack: "Laravel",
            //     icon: FaLaravel,
            //     color: '#FF2D20'
            // },

            {
                stack: "MySQL",
                icon: GrMysql,
                color: '#4479A1'
            },

            {
                stack: "MongoDB",
                icon: SiMongodb,
                color: '#589636'
            },

            {
                stack: "Firebase",
                icon: IoLogoFirebase,
                color: '#FFCA28'
            },

            {
                stack: "Python",
                icon: FaPython,
                color: '#3776AB'
            },
        ]
    }
}
    
