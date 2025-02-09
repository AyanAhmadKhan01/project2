"use client"

import React from "react"


interface InputProps{
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ 
    type = "text",
    placeholder = "Enter text...", 
    value, 
    onChange, 
}: InputProps) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            className="3xs:max-w-[230px] 3xs:w-full bg-[rgba(255,255,255,0.05)] pl-[43px] py-3 outline-none rounded-lg text-base font-light tracking-tight placeholder:text-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.8)] focus:ring-2 focus:ring-[rgba(255,255,255,0.1)] w-72"
        />
    );
}