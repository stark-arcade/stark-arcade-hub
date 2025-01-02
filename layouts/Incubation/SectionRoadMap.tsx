import React from "react";
import PlanetStepper from "./PlaneSteper";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const SectionRoadMap = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <p className="max-w-[792px] text-center">
        Join the 1st cohort of Arcade Garden as we gear up to revolutionize
        2025! Over the course of two months, developers and blockchain
        enthusiasts will come together to create groundbreaking projects on
        Starknet, delving into decentralized technology and forging the path
        ahead.
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
