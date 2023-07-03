import React from "react";

import classNames from "classnames";

export const BackGradient: React.FC = () => {
  return (
    <div className="relative z-0">
      <div className="relative w-[calc(100%+200px)]">
        <div
          className={classNames(
            "relative min-w-[1440px] aspect-square rounded-50 -z-10",
            "opacity-10 bg-gradient-to-l from-green-10 via-transparent to-transparent"
          )}
        ></div>
        <div
          className={classNames(
            "absolute top-1/2 w-full aspect-square rounded-50",
            "bg-green-70"
          )}
        ></div>
      </div>
    </div>
  );
};
