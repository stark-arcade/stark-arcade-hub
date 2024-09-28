'use client';
import React, { PropsWithChildren, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';

import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

const EmblaCarousel = ({ children }: PropsWithChildren) => {
  // const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      containScroll: false,
      loop: false,
    },
    [WheelGesturesPlugin()]
  );
  const [isScrolling, setIsScrolling] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick, setSelectedIndex } =
    useDotButton(emblaApi);

  const handleMouseEnter = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
      return;
    }
  };

  return (
    <section className="embla">
      <div
        onMouseEnter={() => setIsScrolling(true)}
        onMouseLeave={() => setIsScrolling(false)}
        className={`embla__viewport ${isScrolling ? 'scrolling' : ''}`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {/* {slides.map((item, index) => (
            <div
              className="embla__slide"
              key={`Card-More-${index}`}
              // onMouseEnter={() => handleMouseEnter(index)}
            >
              <CardTypeOne
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))} */}
          {children}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
