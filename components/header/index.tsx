import React from "react";
import LogoStarkArcade from "./Logo";
import Navigation from "./Navigation";
import NavRight from "./NavRight";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between py-6">
        <LogoStarkArcade />
        <Navigation />
        <NavRight />
      </div>
    </header>
  );
};

export default Header;
