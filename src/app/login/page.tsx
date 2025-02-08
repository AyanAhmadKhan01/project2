import Input from "@/components/Inputs/input";
import Boxcontainer from "@/components/Container/Boxcontainer";
import Link from "next/link";
import Icons from "@/components/Inputs/Icons";
import InputButton from "@/components/Inputs/InputButton";
import Label from "@/components/Inputs/label";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

export default function login() {
    return(
        <>
        <Boxcontainer>
        <div className="flex flex-col justify-center items-center ">
        <img src="/lock-keyhole-svgrepo-com.svg" alt="Register-svg" />
          <h1 className="text-3xl text-white font-normal lowercase  mt-4 mb-8 tracking-tight">Login into account</h1>
  
          <div className="flex items-center gap-2">
            <Icons icon={faEnvelope} style={{top:"276px", left: "46px"}} />
            <Label htmlFor="email">Email</Label>
          </div>
          <Input placeholder="Email" />
  
          <div className="flex items-center mt-4">
          <Icons icon={faKey} style={{top:"369px", left: "46px"}} />
            <Label htmlFor="password">Password</Label>
          </div>
          <Input placeholder="Password" />

          <InputButton>Log in</InputButton>
          <p className="text-white mt-2">Are you new here? <Link href={'/register'} className="text-[#00b7ff]">Create a account</Link></p>
        </div>
        </Boxcontainer>
        </>
    );
}