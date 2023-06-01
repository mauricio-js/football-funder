import {
    ButtonItemType,
    MenuItemType,
    AccountMenuDataType,
    HamburgerMenuItemType,
    SearchDataType
} from "types";
import { MdSearch } from "react-icons/md";

export const homeButtonData: ButtonItemType = {
        title: "Home",
        href: "/home",
}
export const exploreButtonData: ButtonItemType = {
        title: "Explore",
        href: "/explore",
}
export const aboutButtonData: ButtonItemType = {
      href: "/home",
      title: "About",
}
export const faqButtonData: ButtonItemType = {
      href: "/home",
      title: "FAQ",
}
export const supprotButtonData: ButtonItemType = {
      href: "/home",
      title: "Support",
}
export const feeButtonData: ButtonItemType = {
      href: "/home",
      title: "Fees",
}
export const fundraisingButtonData: MenuItemType = {
    title: "Fundraising",
    href: "/",
    children: [
        {
            title: "Fundraise",
            href: "/home"
        },
        {
            title: "Contribute",
            href: "/home"
        },
    ]
}
export const sponsorshipButtonData: MenuItemType = {
     title: "Sponsorship",
        href: "/",
        children: [
            {
                title: "Buy",
                href: "/home"
            },
            {
                title: "Sell",
                href: "/home"
            },
        ]
}
export const advertisingButtonData: MenuItemType = {
     title: "Advertising",
        href: "/",
        children: [
            {
                title: "Buy",
                href: "/home"
            },
            {
                title: "Sell",
                href: "/home"
            },
        ]
}
export const moreButtonData: MenuItemType = {
   
        title: "More",
        href: "/",
        children: [
            {
                title: "FAQ",
                href: "/home"
            },
            {
                title: "About",
                href: "/home"
            },
            {
                title: "Support",
                href: "/home"
            },
        ]
}

  export const HamburgerListData: HamburgerMenuItemType[] = [
    
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/",
      title: "Explore",
    },
    {
      href: "/",
      title: "Fundraising",
      children: [
            {
                title: "Fundraise",
                href: "/home"
            },
            {
                title: "Contribute",
                href: "/home"
            },
        ]
    },
    {
      href: "/",
      title: "Advertising",
       children: [
            {
                title: "Buy",
                href: "/home"
            },
            {
                title: "Sell",
                href: "/home"
            },
        ]
    },
    {
      href: "/",
      title: "Sponsorship",
      children: [
            {
                title: "Buy",
                href: "/home"
            },
            {
                title: "Sell",
                href: "/home"
            },
        ]
    },
    {
      href: "/home",
      title: "Fees",
    },
    {
      href: "/home",
      title: "FAQ",
    },
    {
      href: "/home",
      title: "About",
    },
    {
      href: "/home",
      title: "Support",
    },
  ];

export const AccounMenuData : AccountMenuDataType[] = [
    {
        id: 1,
        title: 'My Account'
    },
    {
        id: 2,
        title: 'Profile'
    },
    {
        id: 3,
        title: 'Sign out'
    },
];

export const HamburgerSearchData: SearchDataType = {
    backgroundColor: "bg-green-30",
    placeholder: "Search",
    placeholderClass: "placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-gray-300",
    padding: "py-3 pl-8 pr-[35px]",
    inputColor:"text-white",
    inputTextSize: "font-medium text-[14px]",
    border:"border-none",
    icon: MdSearch,
    iconColor: "text-white",
    iconSize:"text-[16px]"
};