/* eslint-disable @typescript-eslint/no-unused-vars */
// import Link from "next/link";
import React from "react";
interface IProps {
  title: string;
  image: string;
  link?: string;
  description: string;
}
const PrimaryCard = ({ title, link, image, description }: IProps) => {
  return (
    <div className="bg-[#18181B] w-full p-2 embla__slide group rounded-lg">
      <div className="p-[3px] relative overflow-hidden rounded-lg h-full">
        <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:bg-gradient-100  opacity-0 group-hover:opacity-100"></div>
        <div className="h-full relative flex flex-col gap-2 text-[#FAFAFA] rounded-lg bg-[#18181B] p-2">
          {/* <Image
            priority
            alt={title}
            src={image}
            width={200}
            height={200}
            className="rounded-lg w-full min-h-[320px] object-cover"
          /> */}
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-[320px] object-cover"
          />
          <div className="p-4 min-h-[100px]">
            <p className="font-[900] text-3xl text-left mb-2 ">{title}</p>
            <p
              className="line-clamp-3 text-ellipsis overflow-hidden leading-6"
              style={{ minHeight: "4.5rem" }}
            >
              {description}
            </p>
          </div>

          {/* {link ? (
            <Link href={link} target="_blank">
              <button className="bg-gradient-100 px-4 py-2 rounded-md font-bold w-[164px]">
                <span>Play Now</span>
              </button>
            </Link>
          ) : (
            <button className="bg-gradient-200 px-4 py-2 rounded-md font-bold w-[164px]">
              <span>Up Comming</span>
            </button>
          )} */}
          <button className=" bg-gradient-200 text-red-600 px-6 py-2 rounded-lg hover:bg-gradient-to-r flex items-center disable opacity-80 font-bold w-fit">
            <span className="ml-2">Under maintenance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
