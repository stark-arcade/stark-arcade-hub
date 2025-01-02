import React from "react";
import Image from "next/image";
import LogoIcon from "@/public/assets/logo/logo.svg";
// Footer Data
const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container  mx-auto flex justify-between font-bold text-sm">
        <p className="">COPYRIGHT 2024 © STARKARCADE</p>
        <Image src={LogoIcon} alt="logo" width={32} height={32} />
        <p>SECURE BY : STARKNET NETWORK</p>
      </div>
    </footer>
  );
};

export default Footer;
