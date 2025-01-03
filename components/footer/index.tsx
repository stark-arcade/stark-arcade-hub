import React from "react";
import Image from "next/image";
import LogoIcon from "@/public/assets/logo/logo.svg";
// Footer Data
const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container  mx-auto ">
        <div className="w-full justify-between font-bold text-xs md:text-sm flex-col flex lg:flex-row items-center gap-4">
          <p className="">COPYRIGHT 2024 © STARKARCADE</p>
          <Image src={LogoIcon} alt="logo" width={32} height={32} />
          <p>SECURE BY : STARKNET NETWORK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
