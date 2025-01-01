"use client";
import React, { useEffect } from "react";
import LogoStarkArcade from "./Logo";
import Navigation from "./Navigation";

import PrimaryButton from "../button/PrimaryButton";

import ReactIcon from "@/public/assets/icons/reaction.svg";
import Image from "next/image";
import NavSocial from "./NavSocial";
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");

      if (header) {
        header.classList.toggle("sticky-custom", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto flex justify-between py-6">
        <LogoStarkArcade />
        <Navigation />
        <div className="flex items-center gap-6">
          <NavSocial />
          <PrimaryButton className="font-bold flex items-center gap-2 font-sm hover:opacity-70">
            <Image src={ReactIcon} height={24} width={24} alt="React join us" />
            <p>Join Us</p>
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
