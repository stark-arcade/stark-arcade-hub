"use client";
import React, { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import Autoplay from "embla-carousel-autoplay";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const EmblaCarousel = ({ children, className }: IProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
    },
    [Autoplay({ playOnInit: false, delay: 6000 }), WheelGesturesPlugin()]
  );
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    if (emblaApi) {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;
      autoplay.play();
    }
  }, [emblaApi]);

  return (
    <section className="embla">
      <div
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
        className={`embla__viewport ${isScrolling ? "scrolling" : ""}`}
        ref={emblaRef}
      >
        <div className={`embla__container ${className ? className : ""}`}>
          {children}
        </div>

        {/* <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
