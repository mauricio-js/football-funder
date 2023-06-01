import {
    CardType,
    ExploreDropdownType,
    SelectDataType,
    SearchDataType,
    FormDataType
} from "types"
import ExploreCardImageA from 'Assets/images/svg/explore/explore-card-a.svg'
import ExploreCardImageB from 'Assets/images/svg/explore/explore-card-b.svg'
import ExploreCardImageC from 'Assets/images/svg/explore/explore-card-c.svg'
import ExploreCardImageD from 'Assets/images/svg/explore/explore-card-d.svg'
import ExploreCardImageE from 'Assets/images/svg/explore/explore-card-e.svg'
import ExploreCardImageF from 'Assets/images/svg/explore/explore-card-f.svg'
import ExploreCardImageNone from 'Assets/images/svg/explore/explore-card-none.svg'
import MobileExploreCardImageA from 'Assets/images/svg/explore/m-explore-card-a.svg'
import MobileExploreCardImageB from 'Assets/images/svg/explore/m-explore-card-b.svg'
import MobileExploreCardImageC from 'Assets/images/svg/explore/m-explore-card-c.svg'
import MobileExploreCardImageD from 'Assets/images/svg/explore/m-explore-card-d.svg'
import MobileExploreCardImageE from 'Assets/images/svg/explore/m-explore-card-e.svg'
import MobileExploreCardImageF from 'Assets/images/svg/explore/m-explore-card-f.svg'
import MobileExploreCardImageNone from 'Assets/images/svg/explore/m-explore-card-none.svg'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
import { MdSearch } from "react-icons/md";



export const ExploreDropdownData: ExploreDropdownType[] = [
    {
        id: 1,
        name:'England'
    },   
    {
        id: 2,
        name:'Scotland'
    },   
    {
        id: 3,
        name:'Wales'
    },   
    {
        id: 4,
        name:'Northern Ireland'
    },   
];

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
        status : '£50,000 of £100,000',
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
        desktopimage: ExploreCardImageA,
        mobileimage: MobileExploreCardImageA,
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
        status : '£50,000 of £100,000',
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
        desktopimage: ExploreCardImageB,
        mobileimage:MobileExploreCardImageB
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
        status : '£50,000 of £100,000',
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
        desktopimage: ExploreCardImageC,
        mobileimage:MobileExploreCardImageC
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
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
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
       
        desktopimage: ExploreCardImageD,
        mobileimage: MobileExploreCardImageD
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
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
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageE,
        mobileimage: MobileExploreCardImageE
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
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
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
    {
        broadcastingType: 'Live',
        vat:"￡3,000 inc. VAT",
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
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageF,
        mobileimage: MobileExploreCardImageF
    },
    {
        broadcastingType: 'Live',
        vat:"￡15,000",
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
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
    {
        broadcastingType: 'Live',
        vat:"￡15,000",
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
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
];

export const TypeFilterData:SelectDataType[] = [
    {
        title: "All",
        value: "all",
        status:"checked"
    },
    {
        title: "Fundraisers",
        value: "fundraisers",
        status: "none"
    },
    {
        title: "Advertising",
        value: "advertising",
        status: "none"
    },
    {
        title: "Sponsorship",
        value: "sponsorship",
        status: "none"
    }
];

export const OrganisationFilterData:SelectDataType[] = [
    {
        title: "All",
        value: "all",
        status:"checked"
    },
    {
        title: "Clubs",
        value: "clubs",
        status: "none"
    },
    {
        title: "Supporters' Trusts",
        value: "supporter",
        status: "none"
    },
    {
        title: "Local communities",
        value: "local communities",
        status: "none"
    },
    {
        title: "Foundations",
        value: "foundations",
        status: "none"
    },
    {
        title: "Leagues",
        value: "leagues",
        status: "none"
    },
    {
        title: "Charities",
        value: "charities",
        status: "none"
    },
    {
        title: "Singing Sections / Ultras",
        value: "ultras",
        status: "none"
    },
    {
        title: "Agency / Rights holder",
        value: "agency",
        status: "none"
    },
    {
        title: "Podcast / Vlog",
        value: "podcast",
        status: "none"
    },
    {
        title: "Advertiser/Sponsor",
        value: "advertiser",
        status: "none"
    },
    {
        title: "Other",
        value: "other",
        status: "none"
    },  
];
export const StatusFilterData:SelectDataType[] = [
        {
            title: "All",
            value: "all",
            status:"checked"
        },
        {
            title: "Live",
            value: "live",
            status: "none"
        },
        {
            title: "Pending",
            value: "pending",
            status: "none"
        },
        {
            title: "Funded / Sold",
            value: "fund",
            status: "none"
        }
    ];
export const SortByData:SelectDataType[] = [
        {
            title: "Promoted",
            value: "promoted",
            status:"checked"
        },
        {
            title: "Newest (£)",
            value: "newest",
            status: "none"
        },
        {
            title: "Oldest (£)",
            value: "oldest",
            status: "none"
        },
        {
            title: "High to Low",
            value: "high",
            status: "none"
        },
        {
            title: "Low to High",
            value: "low",
            status: "none"
        },
    ];
 

export const ExploreSearchData: SearchDataType = {
    backgroundColor: "bg-white",
    placeholder: "Search...",
    placeholderClass:"placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70",
    padding: "px-[15px] py-[10px]",
    iconColor: "text-black",
    inputTextSize: "font-medium text-[16px]",
    border:"border-2 border-gray-100",
    icon: MdSearch,
    iconSize: "text-[20px]",
    inputColor:"text-black"
};

export const DistanceInputFormData: FormDataType[] = [
    {
        label: "Miles from",
        type: "text",
        textSize:"text-[20px]",
        padding:"px-[15px] py-[10px]",
        height:"h-[54px]"
    },
    {
        label: "Postcode",
        type: "text",
        padding:"px-[15px] py-[10px]",
        textSize:"text-[20px]",
        height:"h-[54px]"
    },
]