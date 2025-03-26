import React from "react";
import PlanetStepper from "./PlaneSteper";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const SectionRoadMap = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <p className="max-w-[792px] text-center font-bold ">
        Join the STARK Arcade Basecamp II as we gear up to revolutionize 2025!
      </p>
      <p className="max-w-[792px] text-center font-bold">
        Over the course of two months, AI engineers, game & DApp builders will
        come together to create groundbreaking AI-powered projects on Starknet,
        delving into decentralized technology and forging the path ahead.
      </p>
      <div className="py-8">
        <Link
          href={`https://x.com/starkarcade`}
          target="_blank"
          key={`social-{item.name}-navright`}
          className="flex items-center gap-2 hover:opacity-70"
        >
          <FaXTwitter className="h-6 w-6" />
        </Link>
      </div>
      <PlanetStepper />
    </div>
  );
};

export default SectionRoadMap;
