import Link from "next/link";
import { Logo } from "./Logo";

export function SignUp(){
    return(
        <div className="flex justify-between">
        <div className="flex justify-center items-center w-[100svh] ">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center">
              <Logo />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="font-semibold text-2xl text-slate-900">
              Create Geld account
              </div>
              <div className="font-normal text-base text-slate-700">
              Sign up below to create your Wallet account
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div>
                <input className="input" type="text" placeholder="Name" />
              </div>
              <div>
                <input className="input" type="text" placeholder="Email" />
              </div>
              <div>
                <input className="input" type="password" placeholder="Password" />
              </div>
              <div>
                <input className="input" type="password" placeholder="Re-password" />
              </div>
              <div>
              <Link href={"/login/sign_up/currency"}> <button className="login-btn text-white text-xl font-normal bg-blue-600"> Sign up</button></Link>
              </div>
            </div>
            <div className="flex text-base font-normal justify-center">
              <div className="text-slate-900 content-center">
                Already have account?
              </div>
              <div className="text-blue-500 hover:text-blue-600 cursor-pointer p-[4px_12px]">
               <Link href={"/login"}> Log in </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF] w-[100svh] h-[100svh]"></div>
      </div>
    )
}