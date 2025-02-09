"use client";

import React from "react";

interface LableProps {
    children: React.ReactNode;
}


export default function Label({ children}: LableProps) {
    return(
        <>
<label 
    htmlFor="" 
    className="block text-[#dbdbd9] text-sm tracking-tighter font-medium text-left w-[285px] 3xs:w-[230px] p-1"
>
    {children}
</label>



        </>
    )
}