"use client"


import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/Inputs/input";
import Label from "@/components/Inputs/label";
import Boxcontainer from "@/components/Container/Boxcontainer";
import InputButton from "@/components/Inputs/InputButton";
import Link from "next/link";
import Icons from "@/components/Inputs/Icons";
import Checkbox from "@/components/Inputs/Checkbox";


export default function Register() {
    return (
      <Boxcontainer>
        <div className="flex flex-col justify-center items-center ">
        <img src="/add-square-svgrepo-com.svg" alt="Register-svg" />
          <h1 className="text-3xl text-white font-normal lowercase  mt-4 mb-8 tracking-tight">Create A Account</h1>
  
          <div className="flex items-center gap-2">
            <Icons icon={faEnvelope} style={{top:"214px", left: "46px"}} />
            <Label htmlFor="email">Email</Label>
          </div>
          <Input placeholder="Email" />
  
          <div className="flex items-center mt-4">
          <Icons icon={faKey} style={{top:"308px", left: "46px"}} />
            <Label htmlFor="password">Password</Label>
          </div>
          <Input placeholder="Password" />

          <div className="flex items-center mt-4">
          <Icons icon={faUser} style={{top:"399px", left: "46px"}} />
            <Label htmlFor="Username">Username</Label>
          </div>
          <Input placeholder="Username" />
        <Checkbox/>

          <InputButton>Register</InputButton>
          <p className="text-white mt-2">Already have an account? <Link href={'/login'} className="text-[#00b7ff]">Sign in</Link></p>
        </div>
      </Boxcontainer>
    );
  }