import { SocialLinkType } from "types";

import FacebookIcon from "Assets/images/svg/icon-facebook";
import InstagramIcon from "Assets/images/svg/icon-instagram";
import LinkdedinIcon from "Assets/images/svg/icon-linkedin";
import TwitterIcon from "Assets/images/svg/icon-twitter";
import YoutubeIcon from "Assets/images/svg/icons-youtube";


export const socialLink: SocialLinkType[] = [
  {
    handleClick: () => console.log("Clicked Facebook"),
    Icon: FacebookIcon,
  },
  {
    handleClick: () => console.log("Clicked Instargram"),
    Icon: InstagramIcon,
  },
  {
    handleClick: () => console.log("Clicked Twitter"),
    Icon: TwitterIcon,
  },
  {
    handleClick: () => console.log("Clicked Linkedin"),
    Icon: LinkdedinIcon,
  },
  {
    handleClick: () => console.log("Clicked YouTube"),
    Icon: YoutubeIcon,
  },
];