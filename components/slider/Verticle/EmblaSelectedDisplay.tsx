import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseSelectedSnapDisplayType = {
  selectedSnap: number;
  snapCount: number;
};

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined
): UseSelectedSnapDisplayType => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

type PropType = {
  selectedSnap: number;
  snapCount: number;
};

export const SelectedSnapDisplay: React.FC<PropType> = (props) => {
  const { selectedSnap, snapCount } = props;

  return (
    <div
      className="relative h-48 w-8 bg-gray-700 rounded-full flex flex-col-reverse"
      aria-label="Slider for selecting snap"
    >
      <div
        className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full left-1/2 transform -translate-x-1/2 transition-transform"
        style={{
          transform: `translate(-50%, calc(${
            selectedSnap / snapCount
          } * -100%))`,
        }}
      ></div>
      <div className="flex-grow bg-gray-500 rounded-full"></div>
    </div>
  );
};
