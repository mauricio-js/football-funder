import React from "react";
import SocialSiteLink from "../Footer/SocialSiteLink";
import { HamburgerListData } from "./headerConfig";

export const HamburgerList = () => {
  return (
    <>
      <div className="divide-y divide-solid divide-green-30 text-white font-semibold text-lg">
        {HamburgerListData.map((item, index) => (
          <div key={index}>
            <div className="px-[10px] py-[20px]">
              <button>{item.title}</button>
              {item.children ? (
                <div className="mt-[20px] flex flex-col gap-[20px]">
                  {item.children.map((key, index) => (
                    <div>
                      <button
                        key={index}
                        className="text-green-10 font-medium text-base"
                      >
                        {key.title}
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div className="px-[10px] py-[20px]">
          <SocialSiteLink />
        </div>
      </div>
    </>
  );
};
