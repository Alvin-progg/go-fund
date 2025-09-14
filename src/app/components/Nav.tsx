import React from "react";
import Link from "next/link";
export const Nav = () => {
  return (
    <nav className="w-full ">
      <div className="flex justify-between mx-50 my-10 items-center">
        <Link href="/" className="font-bold hover:text-primary-500 text-2xl">
          <span >Go-Funds</span>
        </Link>
        <ul className="flex gap-10 font-semibold text-xl ">
          <li className="group relative">
            <Link href="/" className=" hover:text-primary-500 ">
              Sign In
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/" className=" hover:text-primary-500 "> Sign Up <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
