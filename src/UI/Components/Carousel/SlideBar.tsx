import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { CardType } from "types";

interface SlideBarDataProps {
  data: CardType[];
  carouselContent: React.ComponentType<{ cardData: CardType }>;
}

export const SlideBar: React.FC<SlideBarDataProps> = ({
  data,
  carouselContent: CarouselContent,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <div>
      <Carousel
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              margin: "3px",
              border: "2px solid #061807",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "0%",
              border: "1px solid #061807",
              margin: "3px",
              backgroundColor: "#061807",
            },
          },
        }}
        itemsToShow={3}
        speed={400}
        centerMode={false}
      >
        {data.map((item, index) => (
          <div key={index} className="w-[320px] p-2">
            <CarouselContent cardData={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
