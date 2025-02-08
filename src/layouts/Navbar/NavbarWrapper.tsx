"use client"
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


export default function NavbarWrapper() {  
    const pathname = usePathname();
    const excludePath = ['/premium','/home', '/','/documentation'];
    if(!excludePath.includes(pathname)) return null;
    return <Navbar/>
}