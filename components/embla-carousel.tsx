"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./embla-carousel-dot-button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import TestimonialCard from "@/components/testimonial-card";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const data = [
  {
    text: "لقد كانت تجربتي رائعة للغاية! الخدمة كانت ممتازة، والفريق تعامل باحترافية عالية واهتمام بالتفاصيل. أشعر بالرضا الكامل عن النتيجة النهائية، وأنصح الجميع بالتعامل معهم دون تردد.",
    name: "فيصل الحربي",
    field: "تسويق",
  },
  {
    text: "لقد كانت تجربتي رائعة للغاية! الخدمة كانت ممتازة، والفريق تعامل باحترافية عالية واهتمام بالتفاصيل. أشعر بالرضا الكامل عن النتيجة النهائية، وأنصح الجميع بالتعامل معهم دون تردد.",
    name: "محمد الحربي",
    field: "تسويق",
  },
  {
    text: "لقد كانت تجربتي رائعة للغاية! الخدمة كانت ممتازة، والفريق تعامل باحترافية عالية واهتمام بالتفاصيل. أشعر بالرضا الكامل عن النتيجة النهائية، وأنصح الجميع بالتعامل معهم دون تردد.",
    name: "مدري مين الحربي",
    field: "تسويق",
  },
  {
    text: "لقد كانت تجربتي رائعة للغاية! الخدمة كانت ممتازة، والفريق تعامل باحترافية عالية واهتمام بالتفاصيل. أشعر بالرضا الكامل عن النتيجة النهائية، وأنصح الجميع بالتعامل معهم دون تردد.",
    name: "فصولي الحربي",
    field: "تسويق",
  },
  {
    text: "لقد كانت تجربتي رائعة للغاية! الخدمة كانت ممتازة، والفريق تعامل باحترافية عالية واهتمام بالتفاصيل. أشعر بالرضا الكامل عن النتيجة النهائية، وأنصح الجميع بالتعامل معهم دون تردد.",
    name: "احمد الحربي",
    field: "تسويق",
  },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}

          {data.map((item) => {
            return (
              <div key={item.name} className="embla__slide">
                <TestimonialCard
                  text={`"${item.text}"`}
                  name={item.name}
                  field={item.field}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

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
      </div>
    </section>
  );
};

export default EmblaCarousel;
