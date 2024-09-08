import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
    return (
        <div className="p-10">
            <h1 className="text-2xl text-slate-600 font-medium">Know about your garden plants?</h1>
            <Separator className="my-6 bg-slate-300" />
            <div className="flex justify-between items-start flex-col gap-2 p-4 w-fit border border-slate-400 rounded-xl">
                <cite>artichoke</cite>
                <Separator className="my-0.5 bg-slate-300" />
                <Image src="/assets/artichoke.webp" height={150} width={150} alt="artichoke"/>
                <Button asChild variant="secondary" className="w-full bg-slate-200">
                    <Link href="/dashboard/details">learn more</Link>
                </Button>
            </div>
        </div>
    );
}