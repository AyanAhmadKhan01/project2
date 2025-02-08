"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";


interface IconProps {
    icon: IconDefinition;
    className?: string;
    style?: React.CSSProperties;
}

export default function Icons({ icon, className, style}: IconProps) {
    return(
        <>
        <FontAwesomeIcon icon={icon} className="text-[rgba(255,255,255,0.2)] w-5 h-6  absolute" style={style}/>
        </>
    )
}