import GameIncubator from "@/layouts/Home/GameIncubatorList";
import GameWorldSection from "@/layouts/Home/GameWorldSection";
import HeroSection from "@/layouts/Home/HeroSection";

import HowToJoinSection from "@/layouts/Home/HowToJoinSection";
import UpcomingSection from "@/layouts/Home/UpcomingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="md:px-10 px-4">
        <Image
          src="/assets/arts/bg_intro_1.png"
          alt="hero"
          width={1920}
          height={368}
          className="object-cover h-[124px] md:h-[368px] w-full rounded-2xl"
        />
      </div>
      <UpcomingSection />
      <HowToJoinSection />
      <GameWorldSection />
      <GameIncubator />
    </div>
  );
}
