import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";

export function Currency(){
    return(
        <div className="flex flex-col gap-[141px]">
            <div className="flex flex-col gap-12 items-center pt-10">
                <Logo />
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#0166FF] text-white text-sm font-normal"><div className="relative top-[2px] left-[8.5px]">1</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Currency</div>
                    </div>
                    <div className="w-4"></div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#E5E7EB] text-slate-900 text-sm font-normal"><div className="relative top-[2px] left-[8px]">2</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Balance</div>
                    </div>
                    <div className="w-4"></div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#E5E7EB] text-slate-900 text-sm font-normal"><div className="relative top-[2px] left-[8px]">3</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Finish</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-4">
                            <div><Image src={"/currency.svg"} width={48} height={48}/></div>
                            <div className="font-semibold text-2xl text-slate-900">Select base currency</div>
                        </div>
                        <div className="text-center">
                            <select className="select">
                                <option>MNT - Монгол төгрөг</option>
                                <option>USD - Америк доллар</option>
                                <option>KRW - Солонгос вон</option>
                            </select>
                        </div>
                    </div>
                    <div className="font-normal text-xs text-slate-600 w-96 mx-auto">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </div>
                </div>
                <div>                
                <Link href={"/login/sign_up/balance"}><button className="login-btn text-white text-xl font-normal ">Confirm</button></Link>
                </div>
            </div>

        </div>
    )
}