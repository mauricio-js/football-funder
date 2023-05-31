import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCardData } from "./homeConfig";
import { CarouselCard } from "./CarouselCard";

export const SlideBar: React.FC = () => {
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 80,
    },
    smobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel partialVisible={true} responsive={responsive} showDots={true}>
        {CarouselCardData.map((data, index) => {
          return (
            <div key={index} className="pb-[45px]">
              <CarouselCard Item={data} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
