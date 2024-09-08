import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <h1 className="text-4xl font-medium">Sprout 🌱</h1>
        <p>Know your garden grow your garden</p>
        <Button asChild><Link href="/dashboard">Explore</Link></Button>
      </div>
    </main>
  );
}