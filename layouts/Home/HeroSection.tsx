import React from "react";
// import VideoBgArt from "./VideoBgArt";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="h-screen  overflow-hidden">
      {/* <VideoBgArt /> */}
      <Image
        src="/assets/arts/bg_door.png"
        alt="hero"
        width={1920}
        height={368}
        className="object-cover h-full w-full rounded-2xl absolute top-0 left-0 z-[-1]"
      />
      <div className="container mx-auto py-[120px]">
        <div className="font-paladin text-[32px] max-w-[500px]">
          {`Accelerate the world's transition to `}
          <span className="gradient_text bg-gradient-100">
            fully on-chain gaming
          </span>
        </div>
        <p>
          Bridging Gamers and Developers for a Thriving Crypto Gaming Ecosystem.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
