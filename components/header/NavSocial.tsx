import Link from "next/link";
import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const NavSocial = () => {
  const navSocial = [
    {
      name: "Discord",
      url: "https://discord.gg/kJawPz3j",
      icon: <AiOutlineDiscord className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/starkarcade",
      icon: <FaXTwitter className="h-6 w-6" />,
    },
  ];
  return (
    <div className="flex items-center gap-6">
      {navSocial.map((item) => (
        <Link
          href={item.url}
          target="_blank"
          key={`social-${item.name}-navright`}
          className="flex items-center gap-2 hover:opacity-70"
        >
          {item.icon}
        </Link>
      ))}

      {/* <ConnectWalletButton /> */}
    </div>
  );
};

export default NavSocial;
