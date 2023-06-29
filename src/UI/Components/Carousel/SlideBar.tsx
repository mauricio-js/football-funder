import React, { useState } from "react";
import Carousel from "react-simply-carousel";

interface SlideBarDataProps {
  children: React.ReactNode;
}

export const SlideBar: React.FC<SlideBarDataProps> = ({ children }) => {
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
              margin: "20px 3px 3px 3px",
              border: "2px solid #061807",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "0%",
              border: "1px solid #061807",
              margin: "20px 3px 3px 3px",
              backgroundColor: "#061807",
            },
          },
        }}
        itemsToShow={3}
        speed={400}
        centerMode={false}
      >
        {children}
      </Carousel>
    </div>
  );
};
