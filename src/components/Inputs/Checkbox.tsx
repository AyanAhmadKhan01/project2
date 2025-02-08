import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useToggle from "@/hooks/useToggle";
import { faCheck, faCheckSquare, faTicket } from "@fortawesome/free-solid-svg-icons";

export default function Checkbox() {
const [show, toggleshow] = useToggle();

    return (
        <label className="flex items-start mt-2 w-[270px] text-[rgba(255,255,255,.8)] text-sm relative">
            {show && <FontAwesomeIcon icon={faCheck} className="absolute top-[3px] -left-[0px] p-[2px]  bg-[#1a1918] rounded-md text-gray-50 border-2 border-[rgba(255,255,255,0.2)] text-xs transition-all duration-500"></FontAwesomeIcon>  }
            <input
                type="checkbox"
                onClick={toggleshow}
                className="mt-1 mr-2 appearance-none w-4 h-4 border border-[rgba(255,255,255,0.3)] 
                rounded-md bg-black transition-all checked:bg-transparent cursor-pointer"
            />
            <span className="mt-[2px]">
                I agree to <Link href="/tos" className="text-[#00b7ff]">TOS</Link> &{" "}
                <Link href="/privacy" className="text-[#00b7ff]">Privacy Policy</Link>
            </span>
        </label>
    );
}
