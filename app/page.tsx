import GameWorldSection from "@/layouts/Home/GameWorldSection";
import HeroSection from "@/layouts/Home/HeroSection";
import HowToJoinSection from "@/layouts/Home/HowToJoinSection";
import UpcomingSection from "@/layouts/Home/UpcomingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="px-10 ">
        <Image
          src="/assets/arts/bg_intro_1.png"
          alt="hero"
          width={1920}
          height={368}
          className="object-cover h-[368px] w-full rounded-2xl"
        />
      </div>
      <UpcomingSection />
      <HowToJoinSection />
      <GameWorldSection />
    </div>
  );
}
