import { FaReact, FaHtml5,FaCss3, FaPhp, FaLaravel, FaPython} from "react-icons/fa";
import {
    SiJavascript,
    SiVitest,
    SiTailwindcss
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";


export const skills = {
    frontend: {
        title: "Frontend-",
        stacks: [
            {
                stack: "JavaScript",
                icon: SiJavascript,
            },

            {
                stack: "React.js",
                icon: FaReact,
            },

            {
                stack: "HTML5",
                icon: FaHtml5,
            },

            {
                stack: "CSS",
                icon: FaCss3,
            },

            {
                stack: "Tailwind CSS",
                icon: SiTailwindcss,
            },

            {
                stack: "Bootstrap",
                icon: FaBootstrap,
            },


            {
                stack: "Firebase",
                icon: IoLogoFirebase,
            },
        ]
    },
    backend: {
        title: "Backend-",
        stacks: [
            {
                stack: "PHP",
                icon: FaPhp,
            },

            {
                stack: "Laravel",
                icon: FaLaravel,
            },

            {
                stack: "MySQL",
                icon: GrMysql,
            },

            {
                stack: "Python",
                icon: FaPython,
            },
        ]
    }
}
    
