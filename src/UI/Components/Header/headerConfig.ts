import { MenuItem } from "types";

export const menuList:MenuItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Explore",
        href: "/",
    },
    {
        title: "Fundraising",
        href: "/",
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
        title: "Advertising",
        href: "/",
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
        title: "Sponsorship",
        href: "/",
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
        title: "More",
        href: "/",
        children: [
            {
                title: "FAQ",
                href: "/"
            },
            {
                title: "About",
                href: "/"
            },
            {
                title: "Support",
                href: "/"
            },
        ]
    },
   
]

  export const HamburgerListData: MenuItem[] = [
    
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

