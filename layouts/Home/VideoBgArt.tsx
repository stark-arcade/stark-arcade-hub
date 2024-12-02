import React from "react";

const VideoBgArt = () => {
  return (
    <video
      className="absolute top-0 left-0 object-cover w-full h-full z-[-1] border-none outline-none"
      autoPlay
      loop
      muted
    >
      <source src="/assets/video/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBgArt;
