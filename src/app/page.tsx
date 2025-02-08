import { Roboto } from "next/font/google";
import Hero from "@/sections/page";


export const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100","300", "400", "500", "700", "900"], 
})

export default function Home() {
  return (
    <>
    <Hero/>
    </>
  );
}
