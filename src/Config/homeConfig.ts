import { AdsCardDataType} from "types";
import { CarouselCardType } from "types";
import {
  ADSLISTING_URL,
  // HOME_URL,
  // EXPLORE_URL,
  CROWDFUNDINGLIST_URL,
//   HOWITWORKS_URL,
  ORGANISATIONFUNDRAISER_URL,
//   ORGANISATIONINDIVIDUAL_URL,
  ORGANISATIONLISTING_URL,
  SPONSORSHIPLISTING_URL
} from "Lib";
import FirstCarouselCard from "Assets/images/home/first-carousel-card.png";
import SecondCarouselCard from 'Assets/images/home/second-carousel-card.png'
import FundraiseCardImage from "Assets/images/home/fundraise.png";
import ContributeCardImage from "Assets/images/home/contribute.png";
import SponsorshipBuyImg from 'Assets/images/home/sponsorship-buy-img.png'
import SponsorshipSellImg from 'Assets/images/home/sponsorship-sell-img.png'
import AdvertisingBuyImg from 'Assets/images/home/advert-buy-img.png'
import AdvertisingSellImg from 'Assets/images/home/advert-sell-img.png'
import MobileFundraiseCardImage from "Assets/images/home/m-fundraise.png";
import MobileContributeCardImage from "Assets/images/home/m-contribute.png";
import MobileSponsorshipBuyImg from 'Assets/images/home/m-sponsorship-buy-img.png'
import MobileSponsorshipSellImg from 'Assets/images/home/m-sponsorship-sell-img.png'
import MobileAdvertisingBuyImg from 'Assets/images/home/m-advert-buy-img.png'
import MobileAdvertisingSellImg from 'Assets/images/home/m-advert-sell-img.png'

export const FundraisingCardData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Fundraise",
    description:
      "Stand out from the crowd and raise funds on a dedicated football platform.",
    backgroundImage: FundraiseCardImage,
    buttonName: "Start Now",
    linkUrl:ORGANISATIONFUNDRAISER_URL
  },
  {
    id: 2,
    title: "Contribute",
    description:
      "Whether here for a cause you support, or just browsing, you can start donating below.",
    backgroundImage: ContributeCardImage,
    buttonName: "Explore",
    linkUrl:CROWDFUNDINGLIST_URL
  },
];
export const MobileFundraisingCardData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Fundraise",
    description:
      "Stand out from the crowd and raise funds on a dedicated football platform.",
    backgroundImage: MobileFundraiseCardImage,
    buttonName: "Start Now",
    linkUrl:ORGANISATIONFUNDRAISER_URL
  },
  {
    id: 2,
    title: "Contribute",
    description:
      "Whether here for a cause you support, or just browsing, you can start donating below.",
    backgroundImage: MobileContributeCardImage,
    buttonName: "Explore",
     linkUrl:CROWDFUNDINGLIST_URL
  },
];
export const AdvertisingCardData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Interested in showcasing your brand using football? Browse opportunities in your area.",
    backgroundImage: AdvertisingBuyImg,
    buttonName: "Explore",
    linkUrl:ADSLISTING_URL
  },
  {
    id: 2,
    title: "Sell",
    description:
      "List advertising opportunities to brands and put your assets to the best use possible.",
    backgroundImage: AdvertisingSellImg,
    buttonName: "Sell your ads",
     linkUrl:ORGANISATIONLISTING_URL
  },
];
export const MobileAdvertisingCardData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Interested in showcasing your brand using football? Browse opportunities in your area.",
    backgroundImage: MobileAdvertisingBuyImg,
    buttonName: "Explore",
     linkUrl:ADSLISTING_URL
  },
  {
    id: 2,
    title: "Sell",
    description:
      "List advertising opportunities to brands and put your assets to the best use possible.",
    backgroundImage: MobileAdvertisingSellImg,
    buttonName: "Sell your ads",
     linkUrl:ORGANISATIONLISTING_URL
  },
];
export const SponsorshipData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Amplify the presence of your business locally or nationally through football sponsorship.",
    backgroundImage: SponsorshipBuyImg,
    buttonName: "Explore",
     linkUrl:SPONSORSHIPLISTING_URL
  },
  {
    id: 2,
    title: "Sell",
    description:
      "Attract sponsors to your club or organisation by listing your important sponsorship deals.",
    backgroundImage: SponsorshipSellImg,
    buttonName: "Sell your spots",
     linkUrl:""
  },
];
export const MobileSponsorshipData: AdsCardDataType[] = [
  {
    id: 1,
    title: "Buy",
    description:
      "Amplify the presence of your business locally or nationally through football sponsorship.",
    backgroundImage: MobileSponsorshipBuyImg,
    buttonName: "Explore",
     linkUrl:SPONSORSHIPLISTING_URL
  },
  {
    id: 2,
    title: "Sell",
    description:
      "Attract sponsors to your club or organisation by listing your important sponsorship deals.",
    backgroundImage: MobileSponsorshipSellImg,
    buttonName: "Sell your spots",
     linkUrl:""
  },
];


export const CarouselCardData: CarouselCardType[] = [
    {
    label: 'Live',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '100% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost:'￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:SecondCarouselCard
    },
    {
    label: 'Funded',
    title: 'Running a crowdfunding campaign for my football club',
    description: 'The subheader for running a crowdfunding campaign for my football club goes here and there’s three lines of copy available to describe it.',
    success: '50% of goal',
    cost: '￡50,000 of ￡100,000',
    img:FirstCarouselCard
    },

];