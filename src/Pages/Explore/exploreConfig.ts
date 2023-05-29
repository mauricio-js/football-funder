import { ExploreCardType, ExploreDropdownType } from "types"
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
import UserIcon from "Assets/images/svg/explore/tabler-icon-user-circle.svg";
import LocationIcon from 'Assets/images/svg/explore/tabler-icon-map-pin.svg'
import CalendarIcon from 'Assets/images/svg/explore/tabler-icon-calendar.svg'
import MessageIcon from 'Assets/images/svg/explore/tabler-icon-message-circle.svg'

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

export const ExploreCardData: ExploreCardType[] = [
    {
        broadcastingType: 'Live',
        club: {
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:MessageIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:MessageIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress:true,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        collection: {
            icon:MessageIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress:false,
        fund: '50% funded',
        status : '£50,000 of £100,000',
        date: {
            icon:CalendarIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:CalendarIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:CalendarIcon,
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
            icon:UserIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon:LocationIcon,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10", 
            text: "Durham, England",
        },
        title: 'Front of shirt sponsorship - Season 2023/24',
        description: 'Subline text goes here and there’s three lines of copy available to describe it. Lorem ipsum dolor sit amet de lipsum dolor.',
        progress:false,
        date: {
            icon:CalendarIcon,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70", 
            text: "11th April 2023",
        },
        desktopimage: ExploreCardImageNone,
        mobileimage: MobileExploreCardImageNone
    },
];