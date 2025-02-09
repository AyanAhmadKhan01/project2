"use client";

import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}



export default function NavLink({ href, children }:NavLinkProps) {

    return(
        <Link 
        href={href}
        className="mt-2 px-6 text-white hover:bg-[rgba(255,255,255,0.03)] transition-all duration-500 rounded-[10px] text-lg leading-10 tracking-tighter"
        >
       {children}
        </Link>
    );
}


