import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  const items = [
    "artichoke",
    "asparagus",
    "basil",
    "beets",
    "broccoli",
    "cabbage",
    "carrot",
    "cauliflower",
    "celery",
    "cilantro",
    "cinnamon",
    "clove",
    "corn",
    "cucumber",
    "eggplant",
    "garlic",
    "ginger",
    "gourds",
    "jalapeno",
    "leeks",
    "lettuce",
    "mint",
    "mushroom",
    "onion",
    "peppers",
    "potato",
    "pumpkin",
    "radish",
    "rosemary",
    "spinach",
    "tea",
    "tomato",
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl text-slate-600 font-medium">
        Know about your garden plants?
      </h1>
      <Separator className="my-6 bg-slate-300" />
      <div className="grid grid-cols-9 items-center justify-center gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex justify-between items-start flex-col gap-2 p-4 w-fit border border-slate-400 rounded-xl"
          >
            <cite>{item}</cite>
            <Separator className="my-0.5 bg-slate-300" />
            <Image
              src={`/assets/${item}.webp`}
              height={150}
              width={150}
              alt={item}
            />
            <Button asChild variant="secondary" className="w-full bg-slate-200">
              <Link href={`/dashboard/details?plant=${item}`}>learn more</Link>
            </Button>
          </div>
        ))}
      </div> 
    </div>
  );
}
