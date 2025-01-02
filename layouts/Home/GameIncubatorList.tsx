import Image from "next/image";
import React from "react";
import SocketIcon from "@/public/assets/icons/rocket.svg";

import EmblaCarousel from "@/components/slider/Verticle/EmblaCarousel";
import FadeInVisible from "@/components/animations/FadeInvisible";
import { ListGame } from "@/config/data/game";

const GameIncubator = () => {
  return (
    <div className="container mx-auto w-fit">
      <div className="min-h-[600px] py-[70px]">
        <div className="relative border-8 border-primary-900 rounded-3xl bg-gradient-to-b from-transparent to-black  md:p-10">
          <EmblaCarousel className="flex flex-col h-[600px] md:h-[500px] lg:h-[700px]">
            {ListGame.map((game, index) => (
              <div
                key={`game-intro${index}`}
                className="flex flex-wrap justify-between lg:flex-nowrap gap-4 md:gap-[70px] flex-[0_0_100%] p-4"
              >
                <div className="flex flex-col gap-4 lg:gap-[72px] p-4 h-full z-10">
                  <div className="relative w-[60px] h-[60px] md:w-[120px] md:h-[120px]">
                    <Image
                      src={game.avatar}
                      alt={game.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {game.tags.map((tag, i) => (
                        <span
                          key={`tag-game-intro${i}-${index}`}
                          className={`px-4 py-1 border border-gray-400 bg-[#FAFAFA] bg-opacity-20 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="rounded-3xl overflow-hidden w-[200px] h-[200px] lg:hidden my-4 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${game.banner})`,
                      }}
                    ></div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase mt-6 mb-2">
                      {game.name}
                    </h2>
                    <p className="max-w-[300px] lg:max-w-[650px] line-clamp-4">
                      {game.description}
                    </p>
                  </div>
                  {game.link && (
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className=" bg-gradient-100 text-white px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400 flex items-center">
                        <Image
                          alt="Socket Icon"
                          src={SocketIcon}
                          height={24}
                          width={24}
                          className="w-6 h-6 transition-transform duration-300 group-hover:rotate-40"
                        />
                        <span className="ml-2">Play Now!</span>
                      </button>
                    </a>
                  )}
                </div>
                <FadeInVisible>
                  <div
                    className="hidden lg:block rounded-3xl overflow-hidden w-[600px] h-[600px] bg-cover bg-center bg-no-repeat mt-4"
                    style={{
                      backgroundImage: `url(${
                        game.thumbnail ? game.thumbnail : game.banner
                      })`,
                    }}
                  ></div>
                </FadeInVisible>
                <div
                  className="absolute w-full h-full opacity-80 -z-10 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${game.banner})`,
                  }}
                >
                  <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black"></div>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  );
};

export default GameIncubator;
