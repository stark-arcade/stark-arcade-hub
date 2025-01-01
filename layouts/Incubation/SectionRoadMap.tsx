import NavSocial from "@/components/header/NavSocial";
import React from "react";
import PlanetStepper from "./PlaneSteper";

const SectionRoadMap = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-8">
      <p className="max-w-[792px] text-center">
        Join the 1st cohort of StarkArcade Garden as we gear up to revolutionize
        2025! Over the course of two months, developers and blockchain
        enthusiasts will come together to create groundbreaking projects on
        Starknet, delving into decentralized technology and forging the path
        ahead.
      </p>
      <div className="py-8">
        <NavSocial />
      </div>
      <PlanetStepper />
    </div>
  );
};

export default SectionRoadMap;
