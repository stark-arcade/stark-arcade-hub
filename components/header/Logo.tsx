import React from "react";
import Logo from "@/public/assets/logo/logo.svg";
import LogoText from "@/public/assets/logo/logo_text.svg";
import Image from "next/image";
import Link from "next/link";
const LogoStarkArcade = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Stark Arcade Logo" width={30.79} height={32} />
        <Image
          src={LogoText}
          alt="Stark Arcade Logo Text"
          width={100}
          height={12}
          className="w-auto md:block hidden"
        />
      </div>
    </Link>
  );
};

export default LogoStarkArcade;
