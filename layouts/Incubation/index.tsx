import React from "react";
import ArcadeGradient from "@/public/assets/icons/substract_gradient.svg";
import LocationIcon from "@/public/assets/icons/location.svg";
import PepleIcon from "@/public/assets/icons/people.svg";
import TrophyIcon from "@/public/assets/icons/trophy.svg";
import DateIcon from "@/public/assets/icons/clock.svg";
import ArrowIcon from "@/public/assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

import SectionRoadMap from "./SectionRoadMap";
import SectionInfo from "./SectionInfo";
import SectionQuestion from "./SectionQuestion";
import Section3D from "./Section3D";
const IncubationProgram = () => {
  const ListData = [
    {
      title: "location",
      icon: LocationIcon,
      description: "VietNam",
    },
    {
      title: "People",
      icon: PepleIcon,
      description: "290 participants",
    },
    {
      title: "Trophy",
      icon: TrophyIcon,
      description: "25,000+ USD in STRK",
    },
    // {
    //   title: "Date",
    //   icon: DateIcon,
    //   description: "January 2, 2025 January 27, 2025",
    // },
  ];
  return (
    <div className="container mx-auto pt-[80px] max-w-5xl">
      <div className="flex flex-col items-center gap-4 pb-8 border-b-[1px] border-b-primary-600">
        <Image
          src={ArcadeGradient}
          alt="Arcade Gradient"
          height={166}
          width={166}
        />
        <div className="font-paladin text-[32px] gradient_text bg-gradient-100">
          StarkARCADE GARDEN 2025
        </div>
        <p>
          Empowering developers to build scalable, engaging on-chain gaming
          experiences on Starknet.
        </p>
        <div className="flex flex-col gap-2">
          {ListData.map((item, index) => (
            <div
              key={`incubation-${item.title}-${index}`}
              className="flex items-center gap-4"
            >
              <Image src={item.icon} alt={item.title} height={24} width={24} />
              <p className="font-bold text-sm">{item.description}</p>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <Image src={DateIcon} alt="Date" height={24} width={24} />
            <div className="flex  gap-2 items-center">
              <p className="font-bold text-sm">January 2, 2025</p>
              <Image src={ArrowIcon} alt="Arrow" height={16} width={16} />
              <p className="font-bold text-sm">January 27, 2025</p>
            </div>
          </div>
        </div>
        <Link
          href="https://docs.google.com/forms/d/12UI4xQX0-qk1CGrLYKB17AZrMaMi3_YW10VeQLKDxXE/preview?edit_requested=true"
          target="_blank"
        >
          <button className="bg-gradient-100 px-4 py-2 rounded-md font-bold hover:opacity-50">
            Register Now
          </button>
        </Link>
      </div>

      <SectionRoadMap />
      <SectionInfo />
      <SectionQuestion />
      <Section3D />
    </div>
  );
};

export default IncubationProgram;
