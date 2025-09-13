import React from "react";
import Link from "next/link";
export const Nav = () => {
  return (
    <nav className="w-full ">
      <div className="flex justify-between mx-30 my-10 items-center">
        <Link href="/" className="font-bold hover:text-primary-500 text-2xl">
          <span >Go-Funds</span>
        </Link>
        <ul className="flex gap-10 font-semibold text-xl ">
          <li>
            <Link href="/" className="">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/"> Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
