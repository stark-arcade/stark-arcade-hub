"use client";
import React, { useEffect } from "react";
import LogoStarkArcade from "./Logo";
import Navigation from "./Navigation";

// import PrimaryButton from "../button/PrimaryButton";

// import ReactIcon from "@/public/assets/icons/reaction.svg";
// import Image from "next/image";
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
    <header className="sticky top-0 z-50 px-4 md:px-0">
      <div className="container mx-auto flex justify-between py-6 ">
        <div className="flex gap-6">
          <LogoStarkArcade />
          <Navigation />
        </div>
        {/* <div className="absolute left-[50%] transform -translate-x-1/2"></div> */}
        <NavSocial />
      </div>
    </header>
  );
};

export default Header;
