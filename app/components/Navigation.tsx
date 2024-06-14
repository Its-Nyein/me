"use client";

import { navMenuList } from "@/data/navigation";
import { CustomLink } from "./CustomLink";
import { FiMenu} from "react-icons/fi";
import { AiOutlineClose} from "react-icons/ai";
import { cn } from "../utils/helper";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/imageBorder.css"

export function Navigation() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const overFlowValue = isNavOpen ? "hidden" : "auto";
    document.body.style.overflow = overFlowValue;
  },[isNavOpen])

  return (
    <nav className="py-4 border-b sticky border-zinc-800 shadow-md top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
      <div className="max-w-7xl px-4 md:px-8 mx-auto flex justify-between items-center">
      <div>
        <a href="#home" className="flex items-center z-[-6] h-[42px] w-[42px] translate-y-[-5px] justify-center rounded-full shadow-md avatar__img before:absolute before:z-[-10] before:h-[40px] before:w-[40px] before:animate-[spin_4s_linear_infinite] before:items-center before:rounded-full before:bg-[length: 100%]">
        <Image src="/user_img.jpg" alt="Nyein Phyo Aung's Avatar"
        width={35} height={35} className="justify-center items-center rounded-full bg-white shadow-md object-cover"
        />
      </a>
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => setIsNavOpen(pervNavOpen => !pervNavOpen)}>
        {isNavOpen ? <AiOutlineClose className="text-2xl"/> : <FiMenu className="text-2xl"/>}
      </div>
      <div className={cn(
        "max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen max-md:bg-dark/100 max-md:backdrop-blur-lg"
        , !isNavOpen && "max-md:hidden"
      )}>
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          {navMenuList.map(({title, href}, index) => {
            const isLastElement = index === navMenuList.length - 1;
            return (
              <li key={href}>
                <CustomLink 
                href={href} linkType={isLastElement ? 
                "primary" : 
                "link"}
                onClick={() => {
                  if(isNavOpen) {
                    setIsNavOpen(false)
                  }
                }}
                >{title}</CustomLink>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    </nav>
  );
}
