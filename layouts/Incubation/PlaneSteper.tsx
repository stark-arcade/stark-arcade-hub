import React from "react";
import ActivePlanet from "@/public/assets/icons/planet_active.svg";
import InActivePlanet from "@/public/assets/icons/planet.svg";
import Image from "next/image";
const PlanetStepper = () => {
  const steps = [
    {
      title: "Open Registration",
      date: "Jan 02",
      active: true,
    },
    {
      title: "Close registration",
      date: "Jan 27",
      active: false,
    },
    {
      title: "Base Camp Batch I",
      date: "Feb 06",
      active: false,
    },
    {
      title: "Demo Day I",
      date: "March 11",
      active: false,
    },
    {
      title: "Demo Day II",
      date: "March 13",
      active: false,
    },
    {
      title: "Announce Finalists",
      date: "March 14",
      active: false,
    },
  ];

  return (
    <div className="p-8 w-full">
      <div className="relative">
        {/* Base Line */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-700" />

        <div className="flex justify-between items-center w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center relative 
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

              <h3
                className={`mt-4 font-medium
                ${step.active ? "text-white" : "text-gray-500"}`}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{step.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetStepper;
