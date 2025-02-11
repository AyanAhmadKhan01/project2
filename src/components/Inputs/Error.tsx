import React from "react";

interface ErrorProp {
    error: string;
}


export default function Error({ error }: ErrorProp) {
    return error? (

     <p className="text-base w-[320px] h-[75px] absolute top-6 left-5 bg-[#0f0f0f] rounded-xl border-2 text-red-300 border-red-600 p-2">{error}</p> 
    ) : null
}