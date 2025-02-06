"use client";
import React, { useState } from "react";
import Image from "next/image";
import StarknetIcon from "@/public/assets/logo/starknet_brand.svg";
import StarkArcadeIcon from "@/public/assets/logo/logo.svg";
import GradientCard from "@/components/card/GradientCard";
import Link from "next/link";
import FrameLineArt from "@/public/assets/arts/frame_art_2.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const SectionQuestion = () => {
  const ListFrequentlyQuestion = [
    {
      title: "Are there any limits to team size?",
      description: "Team size can vary from 1 to 5 participants per project.",
    },
    {
      title: "How does team formation work in the hackathon?",
      description:
        "Team formation will take place on the google form submission.",
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
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navSocialArcade = [
    // {
    //   name: "Discord",
    //   url: "https://discord.gg/kJawPz3j",
    //   icon: <AiOutlineDiscord className="h-6 w-6" />,
    // },
    {
      name: "Twitter",
      url: "https://x.com/starkarcade",
      icon: <FaXTwitter className="h-6 w-6" />,
    },
  ];
  const navSocialFoundation = [
    {
      name: "Website",
      url: "https://www.starknet.io/",
      icon: <AiOutlineGlobal className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/StarknetFndn",
      icon: <FaXTwitter className="h-6 w-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="font-paladin text-2xl md:text-[32px] text-center gradient_text bg-gradient-100 mb-6 w-full">
        Starknet Garden sponsors
      </div>
      <p>These amazing sponsors made it all happen</p>
      <div className="flex md:gap-10 gap-4 pt-6">
        <GradientCard>
          <div className="flex flex-col justify-center h-full items-center gap-2 flex-1 md:w-[180px] w-[120px]">
            <Image
              src={StarkArcadeIcon}
              alt={"Starknet Foundation"}
              height={100}
              width={100}
              className="md:w-[100px] w-[60px]"
            />
            <div className="flex flex-col">
              <p className="font-bold text-base md:text-lg">Arcade Garden</p>
              <p>Host</p>
            </div>
            <div className="flex items-center gap-3 z-20">
              {navSocialArcade.map((item) => (
                <Link
                  href={item.url}
                  target="_blank"
                  key={`social-${item.name}-navright`}
                  className="flex items-center gap-2 hover:opacity-70"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </GradientCard>

        <GradientCard>
          <div className="flex flex-col justify-center h-full items-center gap-2 flex-1 md:w-[180px] w-[120px]">
            <Image
              src={StarknetIcon}
              alt={"Starknet Foundation"}
              height={100}
              width={100}
              className="md:w-[100px] w-[60px]"
            />
            <div className="flex flex-col">
              <p className="font-bold text-base md:text-lg">
                Starknet Foundation
              </p>
              <p>Sponsor</p>
            </div>
            <div className="flex items-center gap-3 z-20">
              {navSocialFoundation.map((item) => (
                <Link
                  href={item.url}
                  target="_blank"
                  key={`social-${item.name}-navright`}
                  className="flex items-center gap-2 hover:opacity-70"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </GradientCard>
      </div>
      {/** Frentquently Question */}
      <div className="font-paladin text-2xl md:text-[32px] text-center gradient_text bg-gradient-100 w-full mt-12 mb-6">
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
                <span className=" text-lg md:text-2xl font-bold ">
                  {item.title}
                </span>
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
          className="absolute -right-20 h-full w-auto top-0 hidden md:block"
        />
        <Image
          src={FrameLineArt}
          alt="Frame Line Art"
          width={1}
          height={1}
          className="absolute -left-20 h-full w-auto top-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default SectionQuestion;
