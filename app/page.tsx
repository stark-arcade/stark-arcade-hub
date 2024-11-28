import HeroSection from "@/layouts/Home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Image
        src="/assets/arts/bg_intro_1.jpeg"
        alt="hero"
        width={1920}
        height={368}
        className="object-contain"
      />
    </div>
  );
}
