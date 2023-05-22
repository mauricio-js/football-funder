import React from "react";
import SocialSiteLink from "../Footer/SocialSiteLink";

export const HamburgerList = () => {
  interface Item {
    First: string;
    Second: string;
  }

  interface HamburgerData {
    id: number;
    title: string;
    item?: Item & { [key: string]: string };
  }
  const HamburgerListData: HamburgerData[] = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Explore",
    },
    {
      id: 3,
      title: "Fundraising",
      item: {
        First: "Fundraise",
        Second: "Contribute",
      },
    },
    {
      id: 4,
      title: "Advertising",
      item: {
        First: "Buy",
        Second: "Sell",
      },
    },
    {
      id: 5,
      title: "Suponsorship",
      item: {
        First: "Buy",
        Second: "Sell",
      },
    },
    {
      id: 6,
      title: "Fees",
    },
    {
      id: 7,
      title: "FAQ",
    },
    {
      id: 8,
      title: "About",
    },
    {
      id: 9,
      title: "Support",
    },
  ];
  return (
    <>
      <div className="divide-y divide-solid divide-green-30 text-white font-semibold text-lg">
        {HamburgerListData.map((item) => (
          <div key={item.id}>
            <div className="px-[10px] py-[20px]">
              <button>{item.title}</button>
              {item.item ? (
                <div className="mt-[20px] flex flex-col gap-[20px]">
                  {Object.keys(item.item).map((key, index) => (
                    <div>
                      <button
                        key={index}
                        className="text-green-10 font-medium text-base"
                      >
                        {item.item![key]}
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
