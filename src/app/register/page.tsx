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
import Image from "next/image";
import { fetchData } from "@/utils/api";
import Error from "@/components/Inputs/Error";
import { useState } from "react";
import { json } from "stream/consumers";

export default function Register() {
  
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };


  const registerUser = async () => {

    if (!form.email) {
      setError("Email is required");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Invalid email");
      return;
    }
  
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!form.username) {
      setError("Username is required");
      return;
    }
    try {
      const response = await fetchData("http://localhost:4000/api/register", "POST", form);
      const data: { message?: string } = await response.json(); // Ensure TypeScript knows the expected structure
    
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    
      console.log("User registered successfully", data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  }    

    return (
      <Boxcontainer>
        <div className="flex flex-col justify-center items-center ">
       <Image src="/add-square-svgrepo-com.svg" alt="Register-svg" width={64} height={0} priority={true}  loading="eager"/>
          <h1 className="text-3xl text-white font-normal lowercase  mt-4 mb-8 tracking-tight">Create A Account</h1>
  
  <form onSubmit={(e) => {
e.preventDefault();
registerUser();
  }}>
    <Error error={error}/>
          <div className="flex items-center gap-2">
            <Icons icon={faEnvelope} style={{top:"214px", left: "46px"}} />
            <Label htmlFor="email">Email</Label>
          </div>
          <Input placeholder="Email" name="email" value={form.email} onChange={handleChange} />
  
          <div className="flex items-center mt-4">
          <Icons icon={faKey} style={{top:"308px", left: "46px"}} />
            <Label htmlFor="password">Password</Label>
          </div>
          <Input placeholder="Password" name="password" value={form.password} onChange={handleChange} />
          

          <div className="flex items-center mt-4">
          <Icons icon={faUser} style={{top:"399px", left: "46px"}} />
            <Label htmlFor="Username">Username</Label>
          </div>
          <Input placeholder="Username" name="username" value={form.username} onChange={handleChange}  />
        <Checkbox/>

          <InputButton>Register</InputButton>
          </form>
          <p className="text-white mt-2">Already have an account? <Link href={'/login'} className="text-[#00b7ff]">Sign in</Link></p>
        </div>
      </Boxcontainer>
    );
  }