import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Logo } from "../logo";

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

interface HeadingProps {
    label : string;
}

export const Header = ({label}:HeadingProps ) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center ">

            <h1 className={cn(
                "text-3xl font-semibold", font.className
            )}>
                <Logo height={40} width={40} />
            </h1>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    )
}
