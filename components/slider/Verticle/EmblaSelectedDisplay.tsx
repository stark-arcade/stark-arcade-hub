import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import {
  Box,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

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
    emblaApi.on('select', updateScrollSnapState);
    emblaApi.on('reInit', updateScrollSnapState);
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

export const SelectedSnapDisplay: React.FC<PropType> = props => {
  const { selectedSnap, snapCount } = props;

  return (
    <Slider
      aria-label="slider-ex-3"
      defaultValue={selectedSnap}
      min={0}
      value={selectedSnap}
      step={1}
      max={snapCount}
      bg="shader.700"
      borderRadius="full"
      orientation="vertical"
      h="48"
    >
      <SliderTrack
        bg="shader.500"
        width="8px"
        h="fit-content"
        transform="rotate(-180deg)"
      >
        {/* <SliderFilledTrack /> */}
      </SliderTrack>
      <SliderThumb bg="gradient.100" h={2} w={2} />
    </Slider>
  );
};
