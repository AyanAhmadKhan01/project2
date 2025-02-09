"use client";

import Link from "next/link";
import NavLink from "./NavLink"
import ClaimNowBtn from "../../components/Buttons/ClaimNowBtn";

export default function Navbar() {

  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto p-4">
        <div
          className={`flex justify-between items-center pt-4 pb-5`}
        >
          <h1 className="text-7xl font-bold uppercase tracking-tighter">
           <Link href={"/"}>Project</Link>
          </h1>
          <div className="flex gap-5 font-normal mr-8 text-lg">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/documentation"}>Docs</NavLink>
            <NavLink href={"/premium"}>Pricing</NavLink>
            <Link href={"/register"}><ClaimNowBtn>Claim Now</ClaimNowBtn></Link>
          </div>
        </div>
      </div>
    </>
  );
}
