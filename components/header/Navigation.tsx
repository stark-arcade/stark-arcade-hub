import React from "react";
// import GameIcon from "@/public/assets/icons/controller_game.svg";
// import PodiumIcon from "@/public/assets/icons/podium.svg";
import Link from "next/link";
const Navigation = () => {
  const navItems = [
    {
      name: "Overview",
      url: "/",
      // icon: GameIcon,
    },
    // {
    //   name: "Leaderboard",
    //   url: "/leaderboard",
    //   icon: PodiumIcon,
    // },
    {
      name: "Basecamp",
      url: "/garden",
      // icon: IncubationIcon,
    },
  ];
  return (
    <div className="flex items-center justify-center gap-6">
      {navItems.map((item, index) => (
        <Link
          href={item.url}
          key={`navigation-${item.name}-${index}`}
          className="flex items-center gap-2"
        >
          {/* <Image
            src={item.icon}
            height={32}
            width={32}
            alt={`${item.name}-${index}`}
          /> */}
          <span className="font-extrabold text-sm hover:text-orange-500 duration-200 uppercase">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
