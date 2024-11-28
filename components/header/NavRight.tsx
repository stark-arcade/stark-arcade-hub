import Link from "next/link";
import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import PrimaryButton from "../button/PrimaryButton";
import ConnectWalletButton from "../button/ConnectWalletButton";
const NavRight = () => {
  const navSocial = [
    {
      name: "Discord",
      url: "https://discord.gg",
      icon: <AiOutlineDiscord className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://discord.gg",
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
          className="flex items-center gap-2"
        >
          {item.icon}
        </Link>
      ))}
      <PrimaryButton>Join Us</PrimaryButton>
      <ConnectWalletButton />
    </div>
  );
};

export default NavRight;
