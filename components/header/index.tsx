"use client";
import React, { useEffect } from "react";
import LogoStarkArcade from "./Logo";
import Navigation from "./Navigation";
import NavRight from "./NavRight";

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
        <NavRight />
      </div>
    </header>
  );
};

export default Header;
