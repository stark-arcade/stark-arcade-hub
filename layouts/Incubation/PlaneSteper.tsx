import React from "react";
import ActivePlanet from "@/public/assets/icons/planet_active.svg";
import InActivePlanet from "@/public/assets/icons/planet.svg";
import Image from "next/image";
const generateSteps = () => {
  const steps = [
    { title: "Open Registration", date: "Jan 02" },
    { title: "Close registration", date: "Jan 27" },
    { title: "Base Camp Batch I", date: "Feb 06" },
    { title: "Demo Day I", date: "March 11" },
    { title: "Demo Day II", date: "March 13" },
    { title: "Announce Finalists", date: "March 14" },
  ];

  const currentYear = new Date().getFullYear();
  const now = Date.now();

  return steps.map((step) => {
    const timestamp = new Date(`${step.date} ${currentYear}`).getTime();
    return {
      ...step,
      timestamp,
      active: timestamp < now,
    };
  });
};
const PlanetStepper = () => {
  const steps = generateSteps();

  return (
    <div className="p-0 md:p-8 w-full">
      <div className="flex items-center justify-center ">
        <div className="font-paladin text-2xl md:text-[32px] gradient_text bg-gradient-100 mb-6 w-full text-center">
          Arcade Garden Roadmap
        </div>
      </div>

      <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4 my-6">
        {steps.map((step, index) => (
          <li
            className="flex-start group relative flex lg:flex-col  h-full"
            key={index}
          >
            <span
              className={`absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-primary-600 lg:right-0 lg:left-auto lg:top-[24px] lg:h-px lg:w-[calc(100%_-_72px)] ${
                index == steps.length - 1 ? "hidden" : ""
              }`}
              aria-hidden="true"
            ></span>
            <div className="inline-flex w-12 h-12 shrink-0 items-center justify-center rounded-xl transition-all duration-200">
              <div
                className={`rounded-full flex items-center relative 
                ${
                  step.active
                    ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                    : ""
                }`}
              >
                <div
                  className={`${
                    step.active ? "bg-[#111117]" : ""
                  } w-full h-full rounded-full flex items-center justify-center`}
                >
                  <Image
                    src={step.active ? ActivePlanet : InActivePlanet}
                    alt="Planet"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-3">
              <h3
                className={`mt-4 font-medium md:text-base text-xs
                ${step.active ? "text-white" : "text-gray-500"}`}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{step.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetStepper;
