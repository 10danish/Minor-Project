"use client";

import { signIn } from "next-auth/react";
import { MdOutlineAccountCircle } from "react-icons/md";
const SignInBtn = () => {
  return (
    <button className="flex flex-row gap-1 items-center border-[1px] border-slate-700 rounded-full overflow-hidden px-3 py-1.1.5 hover:text-blue-400 cursor-pointer" onClick={() => signIn("google")}>
      <MdOutlineAccountCircle className="h-6 w-6" />
      Sign In
    </button>
  )
}

export default SignInBtn;