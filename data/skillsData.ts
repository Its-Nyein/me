import { FaReact, FaHtml5,FaCss3, FaPhp, FaLaravel, FaPython, FaAngular } from "react-icons/fa";
import {
    SiJavascript,
    SiVitest,
    SiTailwindcss
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
                color: '#F7DF1E',
                backgroundColor: "#323330"
            },

            {
                stack: "TypeScript",
                icon: SiTypescript,
                color: '#007acc',
                backgroundColor: "#20232A"
            },

            {
                stack: "React.js",
                icon: FaReact,
                color: '#61DAFB',
                backgroundColor: "#20232A"
            },

            {
                stack: "Angular",
                icon: FaAngular,
                color: '#DD0031',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "HTML5",
                icon: FaHtml5,
                color: '#E34F26',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "CSS",
                icon: FaCss3,
                color: '#1572B6',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "Tailwind CSS",
                icon: SiTailwindcss,
                color: '#06B6D4',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "Bootstrap",
                icon: FaBootstrap,
                color: '#7952B3',
                backgroundColor: "#F0F0F0"
            },
        ]
    },
    backend: {
        title: "Backend-",
        stacks: [
            {
                stack: "PHP",
                icon: FaPhp,
                color: '#4F5B93',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "Laravel",
                icon: FaLaravel,
                color: '#FF2D20',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "MySQL",
                icon: GrMysql,
                color: '#4479A1',
                backgroundColor: "#E0E0E0"
            },

            {
                stack: "Firebase",
                icon: IoLogoFirebase,
                color: '#FFCA28',
                backgroundColor: "#F0F0F0"
            },

            {
                stack: "Python",
                icon: FaPython,
                color: '#3776AB',
                backgroundColor: "#FFD43B"
            },
        ]
    }
}
    
