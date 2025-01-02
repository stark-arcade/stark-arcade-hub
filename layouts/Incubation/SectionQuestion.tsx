"use client";
import React, { useState } from "react";
import Image from "next/image";
import StarknetIcon from "@/public/assets/logo/starknet_brand.svg";
import StarkArcadeIcon from "@/public/assets/logo/logo.svg";
import GradientCard from "@/components/card/GradientCard";
import Link from "next/link";
import FrameLineArt from "@/public/assets/arts/frame_art_2.svg";
const SectionQuestion = () => {
  const ListSponsor = [
    {
      title: "Arcade Garden",
      icon: StarkArcadeIcon,
      description: "Host",
    },
    {
      title: "Starknet Foundation ",
      icon: StarknetIcon,
      description: "Sponsor",
      link: "https://www.starknet.io/",
    },
  ];
  const ListFrequentlyQuestion = [
    {
      title: "Are there any limits to team size?",
      description: "Team size can vary from 1 to 5 participants per project.",
    },
    {
      title: "How does team formation work in the hackathon?",
      description:
        "Team formation will take place on the form google submission.",
    },
    {
      title: "Are there any eligibility requirements for participants?",
      description:
        "Participants must be 18 years or older. Winners must be able to complete KYC verification to claim prizes.",
    },
    {
      title: "Who is this hackathon for?",
      description: `This hackathon is for developers, blockchain enthusiasts, and innovators passionate about decentralized technologies. Whether you're a seasoned builder or new to Starknet, if you’re eager to learn, create, and collaborate, this event is for you!`,
    },
    {
      title: "How does payments work?",
      description:
        "Depending on the payout option selected the sponsor will reach out after hackathon is done or send you the prize directly to your submitted wallet address.",
    },
    {
      title: "How does judging work?",
      description:
        "Judging is done by the sponsors based on judging and acceptance criteria of the challenges.",
    },
    {
      title: "What happens if I win a Challenge?",
      description:
        "If you win a challenge, the sponsor or hackathon organizer will reach out or send your prize money directly to your submitted wallet address.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="font-paladin text-[32px] gradient_text bg-gradient-100 mb-6 w-full">
        Starknet Garden sponsors
      </div>
      <p>These amazing sponsors made it all happen</p>
      <div className="flex gap-10 pt-6">
        {ListSponsor.map((item, index) => (
          <GradientCard key={`sponsor-${item.title}-${index}`}>
            {item.link ? (
              <Link
                href={item.link}
                className="flex flex-col items-center gap-2 flex-1 min-w-[150px]"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={100}
                  width={100}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </Link>
            ) : (
              <div className="flex flex-col items-center gap-2 min-w-[150px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={100}
                  width={100}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </GradientCard>
        ))}
      </div>
      {/** Frentquently Question */}
      <div className="font-paladin text-[32px] gradient_text bg-gradient-100 w-full mt-12 mb-6">
        Frequently Asked Questions
      </div>
      <div className="relative w-full">
        <div className="space-y-4 ">
          {ListFrequentlyQuestion.map((item, index) => (
            <div
              key={index}
              className="border-b border-b-primary-600 overflow-hidden text-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-4 transition"
              >
                <span className="text-2xl font-bold ">{item.title}</span>
                <span className="text-2xl ">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-4 py-3 ">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={FrameLineArt}
          alt="Frame Line Art"
          width={1}
          height={1}
          className="absolute -right-20 h-full w-auto top-0"
        />
        <Image
          src={FrameLineArt}
          alt="Frame Line Art"
          width={1}
          height={1}
          className="absolute -left-20 h-full w-auto top-0"
        />
      </div>
    </div>
  );
};

export default SectionQuestion;
