"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
        const pathname = usePathname();

    return (
      <>
        <nav className="bg-white px-[8%] py-[20px]">
          <div className="flex items-center justify-between px-4 py-2 text-dark">
            <img src="/cashLogo.svg" alt="" />{" "}
            <ul className="flex items-center space-x-4 text-[20px] text-[#1F3172] font-[600]">
              <li>
                <Link href="/" className={`${pathname === "/" ? "text-[##182759] font-[700] active" : "text-[#1F3172] font-[600]"} link-gradient-border`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/convert" className={`${pathname === "/convert" ? "text-[##182759] font-[700] active" : "text-[#1F3172] font-[600]"} link-gradient-border`}>
                  Convert
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`${pathname === "/blog" ? "text-[##182759] font-[700] active" : "text-[#1F3172] font-[600]"} link-gradient-border`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/policies" className={`${pathname === "/policies" ? "text-[##182759] font-[700] active" : "text-[#1F3172] font-[600]"} link-gradient-border`}>
                  Policies
                </Link>
              </li>

              <button className="bg-primary px-[20px] py-[10px] text-white font-[700] rounded-[8px] ml-4">Get App</button>
            </ul>
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;