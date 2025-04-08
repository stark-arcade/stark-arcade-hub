import ActivePlanet from "@/public/assets/icons/planet_active.svg";
import InActivePlanet from "@/public/assets/icons/planet.svg";
import Image from "next/image";

const PlanetStepper = () => {
  const steps = [
    {
      title: "Open Registration",
      date: "March 25",
      active: true,
    },
    {
      title: "Close registration",
      date: "April 18",
      active: false,
    },
    {
      title: "Grand Opening",
      date: "April 23",
      active: false,
    },
    {
      title: "First Session",
      date: "April 24",
      active: false,
    },
    {
      title: "Demo Day",
      date: "May 27",
      active: false,
    },
    // {
    //   title: "Demo Day II",
    //   date: "......",
    //   active: false,
    // },
    // {
    //   title: "Announce Finalists",
    //   date: "......",
    //   active: false,
    // },
  ];

  return (
    <div className="p-4 md:p-8 w-full">
      <div className="relative">
        {/* Base Line - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-700" />

        {/* Mobile vertical line */}
        <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 h-full bg-gray-700" />

        {/* Desktop layout - Hidden on mobile */}
        <div className="hidden md:flex relative">
          {steps.map((step, index) => {
            // Calculate position percentage based on index
            const totalSteps = steps.length;
            const stepWidth = 100 / (totalSteps - 1);
            const position = index * stepWidth;

            return (
              <div
                key={`desktop-${index}`}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${position}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative 
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
                  className={`mt-4 font-medium text-center
                  ${step.active ? "text-white" : "text-gray-500"}`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {step.date}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile layout - Vertical steps */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={`mobile-${index}`} className="flex items-start ml-12">
              <div className="absolute left-6 transform -translate-x-1/2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative 
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
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <h3
                  className={`font-medium
                  ${step.active ? "text-white" : "text-gray-500"}`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop spacer to ensure proper height */}
        <div className="hidden md:block h-48"></div>
      </div>
    </div>
  );
};

export default PlanetStepper;
