import React from "react";
import Image from "next/image";
import SubmitIcon from "@/public/assets/icons/submit.svg";
import CodeIcon from "@/public/assets/icons/code.svg";
import VideoIcon from "@/public/assets/icons/video_chat.svg";
import TaskIcon from "@/public/assets/icons/task.svg";
import GhostIcon from "@/public/assets/icons/ghost.svg";
const HowToJoinSection = () => {
  const ListJoin = [
    {
      title: "Prepare",
      content: "Prepare your team and your idea",
      icon: TaskIcon,
    },
    {
      title: "Submit",
      content: "Prepare your team and your idea",
      icon: SubmitIcon,
    },
    {
      title: "Wait",
      content: "Prepare your team and your idea",
      icon: CodeIcon,
    },
    {
      title: "Play",
      content: "Prepare your team and your idea",
      icon: VideoIcon,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 ">
        <Image src={GhostIcon} alt="Ghost Icon" height={40} width={40} />
        <p className="title_text">How to join</p>
      </div>
      <p className="text-primary-100 font-bold mt-4 mb-6">
        Fill in here a short content
      </p>
      <div className="flex items-center w-full justify-between py-6">
        {ListJoin.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center flex-wrap">
              <Image
                src={item.icon}
                alt={item.title}
                height={80}
                width={80}
                className="h-[40px] md:h-[80px]"
              />
              <p className=" text-base md:text-2xl font-bold mt-3 mb-1">
                {item.title}
              </p>
              <p className="text-sm md:text-base text-center">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToJoinSection;
