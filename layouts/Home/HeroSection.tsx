import React from "react";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="md:h-screen h-1/2 overflow-hidden">
      {/* <VideoBgArt /> */}
      <Image
        src="/assets/arts/bg_door.png"
        alt="hero"
        objectFit="cover"
        priority
        height={600}
        width={600}
        className="absolute top-[20%] md:top-0 left-0 object-cover  z-[-1] border-none outline-none md:h-full md:w-full h-[200px] w-[200px]"
      />
      <div className="container mx-auto py-[120px] px-4 md:px-0">
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
