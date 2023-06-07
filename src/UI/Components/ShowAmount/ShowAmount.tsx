import React from "react";
import classNames from "classnames";
import { BiPound } from "react-icons/bi";

interface ShowAmountProps {
  amount: string;
  classes: string;
}

export const ShowAmount: React.FC<ShowAmountProps> = ({ amount, classes }) => {
  return (
    <div
      className={classNames(
        "p-15 bg-gray-50 border border-1 rounded-10",
        classes
      )}
    >
      <div className="flex items-center gap-1">
        <div className="text-green-10">
          <BiPound />
        </div>
        <div>{amount}</div>
      </div>
    </div>
  );
};
