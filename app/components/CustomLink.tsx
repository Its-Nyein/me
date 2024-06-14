import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cn } from "../utils/helper";

interface Iprops extends LinkProps {
    children: ReactNode;
    linkType?: "primary" | "secondary" | "link" | "none";
    className?: string;
}

const styled = {
    baseStyled: "px-6 py-2 rounded-full inline-block text-sm cursor-pointer",
    primary: "bg-zinc-100 text-zinc-900",
    secondary: "border border-zinc-700 hover:bg-gray-800",
    link: "text-zinc-400 hover:text-zinc-50 hover:underline",
    none: "px-0",
}

export function CustomLink({children, linkType="primary", className, ...props}:Iprops) {
    return <Link {...props} className={cn(linkType !== "link"&& styled.baseStyled, styled[linkType], className )}>{children}</Link>;
}