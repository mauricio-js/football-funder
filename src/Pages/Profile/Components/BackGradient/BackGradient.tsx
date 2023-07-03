import React from "react";

import classNames from "classnames";

export const BackGradient: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative w-[calc(100%+200px)]">
        <div
          className={classNames(
            "w-full aspect-square rounded-50",
            "opacity-10 bg-gradient-to-l from-green-700 via-transparent to-transparent"
          )}
        ></div>
        <div
          className={classNames(
            "absolute top-1/2 w-full aspect-square rounded-50",
            "bg-green-10"
          )}
        ></div>
      </div>
    </div>
  );
};
