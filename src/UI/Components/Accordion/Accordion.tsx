import React, { useState } from "react";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="py-5">
      <div
        className="flex justify-between items-center"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="text-[18px] leading-6 font-semibold text-green-70 cursor-pointer">
          {title}
        </div>
        <div
          className={classNames(
            "text-[24px]",
            showMenu ? "rotate-0" : "rotate-90"
          )}
        >
          <IoIosArrowDown />
        </div>
      </div>
      {showMenu && <div>{children}</div>}
    </div>
  );
};
