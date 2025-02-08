"use client"

import React from "react"

interface InputButton {
    children: React.ReactNode;
}

export default function InputButton({ children}: InputButton) {
    return(
        <>
        <button className="text-white bg-[rgba(255,255,255,0.05)] py-2 px-24 border-2 border-[rgba(255,255,255,0.09)] rounded-xl font-medium mt-6 -tracking-wider text-xl  hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-[.3s]"
        >
         {children}
         </button>
        </>
    )
}