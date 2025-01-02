import React from "react";
import ArcadeGradient from "@/public/assets/icons/substract_gradient.svg";
import LocationIcon from "@/public/assets/icons/location.svg";
import PepleIcon from "@/public/assets/icons/people.svg";
import TrophyIcon from "@/public/assets/icons/trophy.svg";
import DateIcon from "@/public/assets/icons/clock.svg";
import ArrowIcon from "@/public/assets/icons/arrow.svg";

import Link from "next/link";
import ReactIcon from "@/public/assets/icons/reaction.svg";
import Image from "next/image";
import SectionRoadMap from "./SectionRoadMap";
import SectionInfo from "./SectionInfo";
import SectionQuestion from "./SectionQuestion";
import FadeInVisible from "@/components/animations/FadeInvisible";
// import Section3D from "./Section3D";
import PrimaryButton from "@/components/button/PrimaryButton";

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
      description: "22 participants",
    },
    {
      title: "Trophy",
      icon: TrophyIcon,
      description: "$5,000 Grand Finalist + Seed Grant Eligibility",
    },
    // {
    //   title: "Date",
    //   icon: DateIcon,
    //   description: "January 2, 2025 January 27, 2025",
    // },
  ];
  return (
    <div className="container mx-auto pt-[80px] max-w-5xl pb-[100px]">
      <div className="flex flex-col items-center gap-4 pb-8 border-b-[1px] border-b-primary-600">
        <Image
          src={ArcadeGradient}
          alt="Arcade Gradient"
          height={166}
          width={166}
        />
        <div className="font-paladin text-[32px] gradient_text bg-gradient-100">
          ARCADE GARDEN 2025 Cohort: Batch I
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
          <PrimaryButton className="font-bold flex items-center gap-2 font-sm hover:opacity-70">
            <Image src={ReactIcon} height={24} width={24} alt="React join us" />
            <p>Register </p>
          </PrimaryButton>
          {/* <button className="btn-primary px-4 py-2 rounded-md font-bold hover:opacity-90">
            Register Now
          </button> */}
        </Link>
      </div>

      <FadeInVisible>
        <SectionRoadMap />
      </FadeInVisible>
      <FadeInVisible>
        <SectionInfo />
      </FadeInVisible>
      <FadeInVisible>
        <SectionQuestion />
      </FadeInVisible>
      {/* <FadeInVisible>
        <Section3D />
      </FadeInVisible> */}
    </div>
  );
};

export default IncubationProgram;
