"use client"

import React, { ReactNode } from "react";

interface Boxprops {
    children: ReactNode;
}

export default function Boxcontainer({children}:Boxprops) {
    return(
        <div className="3xs:max-w-[300px] 3xs:w-full max-w-[360px] h-[600px] w-full bg-[rgba(255,255,255,.02)] border-2 border-[rgba(255,255,255,.05)] rounded-2xl m-auto flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hover:shadow-[0_0_1000px_rgba(255,255,255,0.05)] transition-all duration-500">
            {children}
            
        </div>
    );
}