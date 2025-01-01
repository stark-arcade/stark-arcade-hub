/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";

import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import ArrowIcon from "@/public/assets/icons/arrow_right.svg";

import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaSelectedDisplay";
import Image from "next/image";
interface IProps {
  children: React.ReactNode;
  className?: string;
}

const EmblaCarousel = ({ children, className }: IProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      dragFree: false,
      loop: true,
    },
    [Autoplay({ playOnInit: false, delay: 6000 }), WheelGesturesPlugin()]
  );
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    if (emblaApi) {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;
      autoplay.play();
    }
  }, [emblaApi]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    onFirstButtonClick,
    onLastButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);
  return (
    <section className="embla_verticle">
      <div
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
        className={`embla__viewport relative ${
          isScrolling ? "scrolling" : ""
        } ${className}`}
        ref={emblaRef}
      >
        <div
          className={`embla__container ${className}`}
          style={{
            paddingRight: "60px",
          }}
        >
          {children}
        </div>
        <div className="absolute top-0 right-0 z-[100] h-[90%] flex flex-col justify-end">
          <div>
            <button
              aria-label=""
              className="icon_btn"
              onClick={() => onPrevButtonClick()}
              disabled={prevBtnDisabled}
            >
              {/* <ArrowIcon className="rotate-[-90deg]" /> */}
              <Image
                src={ArrowIcon.src}
                alt="Arrow Icon"
                height={24}
                width={24}
              />
            </button>
            <button
              aria-label=""
              className="icon_btn"
              onClick={() => onNextButtonClick()}
              disabled={nextBtnDisabled}
            >
              <Image
                src={ArrowIcon.src}
                alt="Arrow Icon"
                height={24}
                width={24}
              />
            </button>
            {/* <button
      aria-label=""
      className="icon_btn"
      onClick={() => onLastButtonClick()}
      disabled={nextBtnDisabled}
    >
      <DoubleArrowsIcon className="rotate-[90deg]" />
    </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
