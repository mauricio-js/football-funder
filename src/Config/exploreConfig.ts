import {
    ButtonDataType,
    CardType,
    RadioButtonDataType,
    InputType,
    SearchDataType,
} from "types"
import FilterIcon from "Assets/images/explore/filter-icon.svg";
import CardImageA from 'Assets/images/explore/card-a.png'
import CardImageB from 'Assets/images/explore/card-b.png'
import CardImageC from 'Assets/images/explore/card-c.png'
import CardImageD from 'Assets/images/explore/card-d.png'
import CardImageE from 'Assets/images/explore/card-e.png'
import CardImageF from 'Assets/images/explore/card-f.png'
import CardSImageNone from 'Assets/images/explore/card-s-none.png'
import CardWImageNone from 'Assets/images/explore/card-w-none.png'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
import { MdSearch } from "react-icons/md";

export const ExploreCardData: CardType[] = [
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageA,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageB,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageC,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageD,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageE,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardSImageNone,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardImageF,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardWImageNone,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon:FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "15 Comments",
        },
        image: CardWImageNone,
    }
];


export const FilterSearchData: SearchDataType = {
    backgroundColor: "bg-white",
    placeholder: "Search...",
    placeholderClass:"placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70",
    padding: "px-15 py-[10px]",
    iconColor: "text-black",
    inputTextSize: "font-medium text-[16px]",
    border:"border-2 border-gray-100",
    icon: MdSearch,
    iconSize: "text-[20px]",
    inputColor:"text-black"
}
export const FiterButtonProperty: ButtonDataType = {
    backgroundColor: "text-white",
    text: "Filter & Sort",
    image: FilterIcon,
    width: "w-[150px]",
    height: "h-[50px]",
    border:"border-[1px] border-gray-100",
}

export const TypeFilterData:RadioButtonDataType[] = [
    {
        label: "All",
        value: 0,
    },
    {
        label: "Fundraisers",
        value: 1,
    },
    {
        label: "Advertising",
        value: 2,
    },
    {
        label: "Sponsorship",
        value: 3,
    }
];

export const OrganisationFilterData: RadioButtonDataType[] = [
    {
        label: "All",
        value: 4,
    },
    {
        label: "Clubs",
        value: 5,
    },
    {
        label: "Supporters' Trusts",
        value: 6,
    },
    {
        label: "Local communities",
        value: 7,
    },
    {
        label: "Foundations",
        value: 8,
    },
    {
        label: "Leagues",
        value: 9,
    },
    {
        label: "Charities",
        value: 10,
    },
    {
        label: "Singing Sections / Ultras",
        value: 11,
    },
    {
        label: "Agency / Rights holder",
        value: 12,
    },
    {
        label: "Podcast / Vlog",
        value: 13,
    },
    {
        label: "Advertiser/Sponsor",
        value: 14,
    },
    {
        label: "Other",
        value: 15,
    },  
];
export const StatusFilterData:RadioButtonDataType[] = [
        {
            label: "All",
            value: 0,
        },
        {
            label: "Live",
            value: 1,
        },
        {
            label: "Pending",
            value: 2,
        },
        {
            label: "Funded / Sold",
            value: 3,
        }
    ];
export const SortByData: RadioButtonDataType[] = [
        {
            label: "Promoted",
        value: 0,
            classes:"justify-between"
        },
        {
            label: "Newest (£)",
            value: 1,
            classes:"justify-between"
        },
        {
            label: "Oldest (£)",
            value: 2,
            classes:"justify-between"
        },
        {
            label: "High to Low",
            value:  3,
            classes:"justify-between"
        },
        {
            label: "Low to High",
            value: 4,
            classes:"justify-between"
        },
    ];
 


export const MileDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Miles from",
    textSize:"generalText",
    type: "text",
}
export const PostcodeDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Postcode",
    textSize:"generalText",
    type: "text",
}
    