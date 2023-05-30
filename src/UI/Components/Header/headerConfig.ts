import { ButtonItemType, MenuItemType, AccountMenuDataType,HamburgerMenuItemType } from "types";

export const homeButtonData: ButtonItemType = {
        title: "Home",
        href: "/home",
}
export const exploreButtonData: ButtonItemType = {
        title: "Explore",
        href: "/explore",
}
export const aboutButtonData: ButtonItemType = {
      href: "/about",
      title: "About",
}
export const faqButtonData: ButtonItemType = {
      href: "/faq",
      title: "FAQ",
}
export const supprotButtonData: ButtonItemType = {
      href: "/support",
      title: "Support",
}
export const feeButtonData: ButtonItemType = {
      href: "/fees",
      title: "Fees",
}
export const fundraisingButtonData: MenuItemType = {
    title: "Fundraising",
    href: "/",
    children: [
        {
            title: "Fundraise",
            href: "/fundraise"
        },
        {
            title: "Contribute",
            href: "/contribute"
        },
    ]
}
export const sponsorshipButtonData: MenuItemType = {
     title: "Sponsorship",
        href: "/",
        children: [
            {
                title: "Buy",
                href: "/sponsorshipbuy"
            },
            {
                title: "Sell",
                href: "/sponsorshipsell"
            },
        ]
}
export const advertisingButtonData: MenuItemType = {
     title: "Advertising",
        href: "/",
        children: [
            {
                title: "Buy",
                href: "/advertisingship"
            },
            {
                title: "Sell",
                href: "/advertisingsell"
            },
        ]
}
export const moreButtonData: MenuItemType = {
   
        title: "More",
        href: "/",
        children: [
            {
                title: "FAQ",
                href: "/faq"
            },
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Support",
                href: "/support"
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
                href: "/"
            },
            {
                title: "Contribute",
                href: "/"
            },
        ]
    },
    {
      href: "/",
      title: "Advertising",
       children: [
            {
                title: "Buy",
                href: "/"
            },
            {
                title: "Sell",
                href: "/"
            },
        ]
    },
    {
      href: "/",
      title: "Sponsorship",
      children: [
            {
                title: "Buy",
                href: "/"
            },
            {
                title: "Sell",
                href: "/"
            },
        ]
    },
    {
      href: "/",
      title: "Fees",
    },
    {
      href: "/",
      title: "FAQ",
    },
    {
      href: "/",
      title: "About",
    },
    {
      href: "/",
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