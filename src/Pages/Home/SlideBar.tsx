import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCardData } from "./homeConfig";
import { CarouselCard } from "./CarouselCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1100, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
export const SlideBar: React.FC = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={1000}
        centerMode={false}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        responsive={responsive}
        slidesToSlide={1}
      >
        {CarouselCardData.map((data, index) => {
          return (
            <div key={index} className="pb-7">
              <CarouselCard Item={data} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
