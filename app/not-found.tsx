import React from "react";
import ArtNotFound from "@/public/assets/arts/404.png";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page Not Found | StarkArcade ",
  description: "Page Not Found | StarkArcade ",
};
const NotFound = () => {
  return (
    <div className="container mx-auto py-[120px] text-center flex flex-col items-center">
      <Image src={ArtNotFound} alt="404 Art" height={400} width={400} />
      <div className="font-paladin text-[32px] ">
        {`404 - `}
        <span className="gradient_text bg-gradient-100">PAGE NOT FOUND</span>
      </div>
      <p>
        {`Sorry Page title contains Page not found and Entry page title doesn't
        contain Page not found.`}
      </p>
      <Link href="/">
        <button className="bg-gradient-200  px-4 py-2 rounded-lg mt-4 text-white font-bold hover:opacity-80">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
