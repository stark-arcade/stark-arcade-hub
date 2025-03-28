import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/slider/Horizontal/EmblaCarousel";
import PrimaryCard from "@/components/card/PrimaryCard";
import { ListUpComming } from "@/config/data/game";

const UpcomingSection = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex items-center gap-2 ">
        <Image
          alt="Fire Icon"
          src="/assets/icons/3d_fire.svg"
          width={40}
          height={40}
        />
        <p className="title_text">games for you</p>
      </div>
      <p className="text-primary-100 font-bold mt-4 mb-6">
        List of games we pick for you based on your interactions on Starkarcade
      </p>

      <EmblaCarousel className="gap-[24px]">
        {ListUpComming.map((game, index) => (
          <PrimaryCard
            key={`${index}-card-${game.name}`}
            title={game.name}
            image={game.banner}
            description={game.description}
            link={game.link}
          />
        ))}
      </EmblaCarousel>
    </div>
  );
};

export default UpcomingSection;
