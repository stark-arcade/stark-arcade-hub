import React from "react";
import Image from "next/image";
const RoadMapSection = () => {
  return (
    <div>
      <div className="container mx-auto my-6">
        <div className="flex items-center gap-2">
          <Image
            alt="Fire Icon"
            src="/assets/arts/3d_star.png"
            width={40}
            height={40}
          />
          <p className="title_text">Game World</p>
        </div>
        <p className="text-primary-100 font-bold mt-4 mb-6">
          {`Looking to get your games listed smoothly? Count on us to have your back!`}
        </p>
      </div>
    </div>
  );
};

export default RoadMapSection;
