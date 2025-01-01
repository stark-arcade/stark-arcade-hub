import React from "react";
import Image from "next/image";
import StarknetIcon from "@/public/assets/logo/starknet_brand.png";
import StarkArcadeIcon from "@/public/assets/logo/logo.svg";
import GradientCard from "@/components/card/GradientCard";
import Link from "next/link";

const SectionQuestion = () => {
  const ListSponsor = [
    {
      title: "Stark Arcade",
      icon: StarkArcadeIcon,
      description: "Host",
    },
    {
      title: "Starknet",
      icon: StarknetIcon,
      description: "Sponsor",
      link: "https://www.starknet.io/",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="font-paladin text-[32px] gradient_text bg-gradient-100 mb-6 w-full">
        Starknet Garden sponsors
      </div>
      <p>These amazing sponsors made it all happen</p>

      <div className="flex gap-10 pt-6">
        {ListSponsor.map((item, index) => (
          <GradientCard key={`sponsor-${item.title}-${index}`}>
            <div className="flex flex-col items-center ">
              {item.link ? (
                <Link href={item.link}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={100}
                    width={100}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-lg">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={100}
                    width={100}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-lg">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </>
              )}
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
};

export default SectionQuestion;
