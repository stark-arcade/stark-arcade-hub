import React from "react";
import GameIcon from "@/public/assets/icons/controller_game.svg";
// import PodiumIcon from "@/public/assets/icons/podium.svg";
import IncubationIcon from "@/public/assets/icons/plant.svg";
import Link from "next/link";
import Image from "next/image";
const Navigation = () => {
  const navItems = [
    {
      name: "Games",
      url: "/games",
      icon: GameIcon,
    },
    // {
    //   name: "Leaderboard",
    //   url: "/leaderboard",
    //   icon: PodiumIcon,
    // },
    {
      name: "Incubation Program",
      url: "/ArcadeGarden",
      icon: IncubationIcon,
    },
  ];
  return (
    <div className="flex gap-10 items-center">
      {navItems.map((item, index) => (
        <Link
          href={item.url}
          key={`navigation-${item.name}-${index}`}
          className="flex items-center gap-2"
        >
          <Image
            src={item.icon}
            height={32}
            width={32}
            alt={`${item.name}-${index}`}
          />
          <span className="font-bold text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
