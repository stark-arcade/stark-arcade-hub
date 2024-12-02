import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IProps {
  title: string;
  image: string;
  link: string;
  description: string;
}
const PrimaryCard = ({ title, link, image, description }: IProps) => {
  return (
    <div className="bg-[#18181B] w-full p-2 embla__slide group rounded-lg">
      <div className="p-[3px] relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:bg-gradient-100  opacity-0 group-hover:opacity-100"></div>
        <div className=" relative flex flex-col gap-2 text-[#FAFAFA] rounded-lg bg-[#18181B] p-2">
          <Image
            alt={title}
            src={image}
            width={200}
            height={200}
            className="rounded-lg w-full min-h-[320px] object-cover"
          />
          <div className="p-4">
            <p className="font-[900] text-3xl text-left mb-2 ">{title}</p>
            <p className="">{description}</p>
          </div>

          <Link href={link}>
            <button className="bg-gradient-100 px-4 py-2 rounded-md font-bold w-[164px]">
              <span>Play</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
