import React from "react";

const SectionInfo = () => {
  return (
    <div className="">
      <div className="font-paladin text-[32px] gradient_text bg-gradient-100 mb-6 w-full">
        About Starknet Garden
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-2xl text-white font-bold text-center">
          Arcade Garden 1st Cohort: Shaping the Future of Decentralized
          Technology!
        </p>

        <div className="flex flex-col gap-6">
          <p className="font-[700] text-xl text-white">
            Submission Dates: January 2-27, 2025
          </p>
          <div>
            Get ready for the inaugural Cohort of Arcade Garden, brought to you
            by StarkArcade and the Starknet Foundation. This two-month event
            challenges developers, blockchain enthusiasts, and tech innovators
            to explore and expand the limits of decentralized technologies.
            Serving as an ideal precursor to the Starknet Hacker House, this
            program offers participants the opportunity to demonstrate their
            capabilities and develop innovative solutions using Starknet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
