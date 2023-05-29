import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselCardData } from "./homeConfig";
import { CarouselCard } from "./CarouselCard";

export const SlideBar: React.FC = () => {
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 2,
      paritialVisibilityGutter: 100,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1200, min: 780 },
      items: 2,
      paritialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 780, min: 670 },
      items: 2,
    },
    smobile: {
      breakpoint: { max: 670, min: 425 },
      paritialVisibilityGutter: 200,
      items: 1,
    },
    ssmobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel partialVisbile={true} responsive={responsive} showDots={true}>
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
