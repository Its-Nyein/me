"use client";

import { navMenuList } from "@/data/navigation";
import { CustomLink } from "./CustomLink";
import { FiMenu} from "react-icons/fi";
import { AiOutlineClose} from "react-icons/ai";
import { cn } from "../utils/helper";
import { useState, useEffect } from "react";
import Image from "next/image";
import Avator from "../../public/user_img.jpg";

export function Navigation() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const overFlowValue = isNavOpen ? "hidden" : "auto";
    document.body.style.overflow = overFlowValue;
  },[isNavOpen])

  return (
    <nav className="py-4 border-b sticky border-zinc-800 shadow-md top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
      <div className="max-w-7xl px-4 md:px-8 mx-auto flex justify-between items-center">
      <span>
        <Image src={Avator} alt="avatar img"
        width={35} height={35} className="rounded-full"
        />
      </span>
      <div className="md:hidden cursor-pointer" onClick={() => setIsNavOpen(pervNavOpen => !pervNavOpen)}>
        {isNavOpen ? <AiOutlineClose className="text-2xl"/> : <FiMenu className="text-2xl"/>}
      </div>
      <div className={cn(
        "max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen max-md:bg-zinc-800 max-md:backdrop-blur-lg"
        , !isNavOpen && "max-md:hidden"
      )}>
        <ul className="flex flex-col md:flex-row gap-6 items-center gap-6">
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
