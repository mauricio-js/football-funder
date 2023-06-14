import React, { useState } from "react";
import classNames from "classnames";
import { BiPound } from "react-icons/bi";

interface ShowAmountProps {
  amount: number;
  setAmount: (value: number) => void;
  classes?: string;
}

export const AmountShow: React.FC<ShowAmountProps> = ({
  amount,
  setAmount,
  classes,
}) => {
  const [inputValue, setInputValue] = useState(amount.toLocaleString("en-US"));
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputValue(value);
    const newAmount = Number(value);
    if (!isNaN(newAmount)) {
      setInputValue(newAmount.toLocaleString("en-US"));
      setAmount(newAmount);
    }
  };
  // console.log("amount", amount, inputValue);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        className={classNames(
          "pl-10 pr-15 py-15 bg-white border border-1 rounded-10 h-[54px] appearance-none focus:outline-none w-full",
          classes
        )}
        onChange={onChangeHandler}
      />
      <div className="absolute top-0 h-full flex  items-center left-4 text-green-10">
        <BiPound />
      </div>
    </div>
  );
};
