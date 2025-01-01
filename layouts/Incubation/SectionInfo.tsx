import React from "react";
import FrameArtLine from "@/public/assets/arts/frame_art_1.svg";
import Image from "next/image";
const SectionInfo = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="font-paladin text-[32px] gradient_text bg-gradient-100 mb-6 w-full">
        About Starknet Garden
      </div>
      <div className="flex flex-col gap-6 relative">
        <div className="absolute  -right-16 h-full w-auto">
          <Image
            src={FrameArtLine.src}
            height={100}
            width={1}
            alt={""}
            className="h-full w-auto"
          />
        </div>
        <div className="absolute  -left-16 h-full w-auto">
          <Image
            src={FrameArtLine.src}
            height={100}
            width={1}
            alt={""}
            className="h-full w-auto rotate-180"
          />
        </div>
        <p className="text-2xl  font-bold text-center">
          Arcade Garden 1st Cohort: Shaping the Future of Decentralized
          Technology!
        </p>

        <div className="flex flex-col gap-6 border-b-[1px] border-b-primary-600 pb-6">
          <p className="font-[700] text-xl ">
            Submission Dates: January 2-27, 2025
          </p>
          <p>
            Get ready for the inaugural Cohort of Arcade Garden, brought to you
            by StarkArcade and the Starknet Foundation. This two-month event
            challenges developers, blockchain enthusiasts, and tech innovators
            to explore and expand the limits of decentralized technologies.
            Serving as an ideal precursor to the Starknet Hacker House, this
            program offers participants the opportunity to demonstrate their
            capabilities and develop innovative solutions using Starknet.
          </p>
        </div>
        <div className="flex flex-col gap-[22px]">
          <p className="font-[700] text-xl ">Who Should Join?</p>
          <div>
            This cohort is open to anyone passionate about decentralized
            technologies:
          </div>
          <p>
            Web3 developers looking to innovate within the Starknet ecosystem.
          </p>
          <p>Web2 builders eager to explore blockchain development.</p>
          <p>Beginners and enthusiasts excited to learn and contribute.</p>
          <p>
            We foster an inclusive and collaborative environment where
            individuals of all skill levels can learn, build, and connect with
            like-minded innovators.
          </p>
        </div>

        <div className="flex flex-col gap-6 border-t-[1px] border-t-primary-600 pt-6 border-b-[1px] border-b-primary-600 pb-6">
          <p className="font-[700] text-xl ">To Infinity and Beyond</p>
          <p>
            Following the conclusion of our program, every team will continue to
            receive our full support to bring a fully operational product to
            market. We are committed to ensuring that each team has the
            resources and guidance needed to successfully launch their
            innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
