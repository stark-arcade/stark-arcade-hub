import React from "react";
import Image from "next/image";
const UpcomingSection = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex items-center gap-2">
        <Image
          alt="Fire Icon"
          src="/assets/icons/3d_fire.svg"
          width={40}
          height={40}
        />
        <p className="title_text">Up coming games for you</p>
      </div>
      <p className="text-primary-100 font-bold">
        List of games we pick for you based on your interactions on Starkarcade
      </p>
    </div>
  );
};

export default UpcomingSection;
