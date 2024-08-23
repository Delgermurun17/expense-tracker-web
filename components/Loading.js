import { Logo } from "./Logo";

export function Loading(){
    return(
        <div className="flex flex-col gap-12 items-center h-[100svh] justify-center">
            <div><Logo /></div>
            <div className="flex flex-col gap-4 items-center">
                <div className="loader"></div>
                <div className="font-semibold text-base text-slate-900">Түр хүлээнэ үү...</div>
            </div>
        </div>
    )
}