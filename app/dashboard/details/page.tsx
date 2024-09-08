import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Details() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex justify-center items-top gap-4 max-w-[60%]">
        <Image
          className="rounded-md border border-slate-300 bg-cover"
          src="https://cdn.pixabay.com/photo/2022/09/15/17/10/artichoke-7456876_1280.jpg"
          height={300}
          width={600}
          alt="artichoke"
        />
        <div className="flex  flex-col gap-4">
          <h1 className="text-4xl font-medium">Artichoke</h1>
          <cite>Cynara cardunculus var. scolymus</cite>
          <p className="">
            Artichokes are known for their tender, edible flower buds. They are
            perennial in warmer climates and grown as annuals in cooler
            climates. Interestingly, artichokes belong to the same family as
            daisies and several other flowers!
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-top gap-4 max-w-[60%] my-4">
        <h2 className="text-2xl">✍️ Requirements</h2>
        <p>Full-sun, water once in a week, season-perennial, germination: 10-21 days, sprout to harvest 90 days</p>
        {/* <Separator className="my-1" />
            <h2>Varities</h2> */}
        <Separator className="my-1" />
        <h2 className="text-2xl">🤝 Companion Plant</h2>
        <p>No know companion plant</p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🙅‍♂️ Combative Plant</h2>
        <p>No known combative plant</p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🪳 Pests</h2>
        <p>alphids, leafminers, slugs & snails, whiteflies</p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🦠 Diseases</h2>
        <p>No known diseases found</p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🐞 Beneficial Critters</h2>
        <p>alphid midge, assasin bugs, bees, birds, butterflies, birds, flies, ladybugs, minute pirate bug, praying mantids, soldier beetles, wasps, worms, spiders</p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🫘 Growing from Seed</h2>
        <p>
          Start seeds indoors to ten eight weeks before your spring frost date.
          Harden off the seedlings before planting them outside and don&apos;t
          wait until all danger of frost has passed. Artichokes require a slight
          chilling (not freezing) before they will set buds. To accomplish this,
          put your plants out in mid-spring and expose them for a week to
          temperatures of about 50 degrees Fahrenheit.
        </p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🪴 Planting Consideration</h2>
        <p>
          Artichokes can grow very large, sometimes 4 feet in diameter so
          spacing is very important. When grown as an annual, they must be
          planted in spring. In warmer zones where they survive as perennials,
          plant as seeds in late summer or transplant in mid-autumn. Artichokes
          produce for about three to five years and will develop side shoots at
          their bases. At this time, you can lift, divide, and replant the new
          shoots. To grow artichokes as perennials, over-winter them according
          to your planting zone. For zones 8 and warmer, after the last harvest,
          cut the plants to soil level and cover with 2 to 4 inches of mulch
          (staw works well). For zones 6 to 7, after the last harvest , cut the
          plants down to about 12 to 18 inches. Cover the plant with organic
          mulch, like straw, leaves, or even compost, and then cover that with a
          large basket. Mound another layer of straw or leaves over the basket
          and cover everything with a waterproof tarp. Zone 5 and cooler: You
          can try the method described for zones 6 to 7, or you can pot up your
          plants, move them to a dark spot that stays cool, but above freezing,
          and water them occasionally throughout the winter. In the spring, move
          the pots back outdoors after all danger of frost, and either replant
          the artichokes in soil or continue to grow them in the containers.
        </p>
        <Separator className="my-1" />
        <h2 className="text-2xl">💧 Feeding</h2>
        <p>
        Apply a balanced vegetable plant food every two weeks throughout the growing season.
        </p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🧑‍🌾 Harvest</h2>
        <p>
        Artichokes can take two years to flower. Harvest the buds for eating before they begin to flower, when it is about 3 inches and the buds feel firm. The center bud will develop first, followed by the ones on the outside, which may be smaller but even more flavorful.
        </p>
        <Separator className="my-1" />
        <h2 className="text-2xl">🫙 Storage</h2>
        <p>
        Sprinkle with some water and store in the coldest part of the fridge in a plastic bag for up to a week.
        </p>
      </div>
    </div>
  );
}
