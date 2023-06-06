import {CategoryDataType, ContactPhoneNumberType, InputType, SelectDataType} from 'types';
export const FundraiserCategoryData: CategoryDataType[] = [
    {
        label: "Club",
        value: "club",
    },
    {
        label: "Individual",
        value:"individual"
    },
    {
        label: "Supporters’ Trust",
        value:"support"
        
    },
    {
        label: "Local community",
        value:"local"
    },
    {
        label: "Foundation",
        value:"foundation"
    },
    {
        label: "League",
        value:"league"
    },
    {
        label: "Charity",
        value:"charity"
    },
    {
        label: "Singing Section / Ultras",
        value:"ultras"
    },
    {
        label: "Agency / Rights holder",
        value:"agency"
    },
    {
        label: "Podcast / Vlog",
        value:"podcast"
    },
    {
        label: "Advertiser/Sponsor",
        value:"advertiser"
    },
    {
        label: "Other",
        value:"other"
    },
]
  
export const FundraiserNationData: CategoryDataType[] = [
    
    {   
        label: "England",
        value: "england",
    },
    {
        label: "Scotland",
        value:"scotland"
    },
    {
        label: "Wales",
        value:"wales"
        
    },
    {
        label: "Northern Ireland",
        value:"northern Ireland"
    }
]

export const ContactOrganisation: InputType = { 
        id: 1,
        label: "Organisation Name",
        height: "h-[54px]",
        textSize: "text-[16px] leading-[22px]",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const ContactPhoneNumber: ContactPhoneNumberType[] = [
    {
        country: "UK",
        randomNumber:"(123) 123-1234"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-2345"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-3456"
    },
    {
        country: "UK",
        randomNumber:"(123) 123-4567"
    },
];


export const ContactAddressLine1: InputType = { 
        id: 1,
        label: "Address line 1",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactAddressLine2: InputType = { 
        id: 2,
        label: "Address line 2",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactTown: InputType = { 
        id: 1,
        label: "Town/City",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactPostcode: InputType = { 
        id: 2,
        label: "Postcode",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountEmail: InputType = { 
        id: 1,
        label: "Email",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "text",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountPassword: InputType = { 
        id: 1,
        label: "Password",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "password",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountConfirmPassword: InputType = { 
        id: 2,
        label: "Confirm password",
        height: "h-[54px]",
        textSize: "generalText",
        padding:" px-3 py-4",
        type: "password",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const FirstName: InputType = { 
        id: 1,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "First Name",
        padding:" px-3 py-4",
        textSize: "generalText",
        type: "text",
}
export const LastName: InputType = { 
        id: 2,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10",
        label: "Last Name",
        height: "h-[54px]",
        padding: " px-3 py-4",
        textSize: "generalText",
        type: "text",
}
export const Date: InputType = {
        id: 1,
        label: "Date of Birth",
        height: "h-[54px]",
        textSize: "generalText",
        padding: " px-3 py-4",
        border:"focus:border-green-10 focus:border-2",
        type: "date",
        content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const PhoneNumber: InputType = {

    id: 5,
    label: "Phone Number",
    height: "h-[58px]",
    textSize: "text-[20px]",
    padding:" px-3 py-4",
    type: "tel",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const WebSite: InputType = {

    id: 6,
    label: "Website",
    height: "h-[58px]",
    textSize: "text-[20px]",
    padding:" px-3 py-4",
    type: "tel",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const VideoURL: InputType = {

    id: 7,
    label: "Video URL",
    height: "h-[54px]",
    textSize: "text-[20px]",
    padding:" px-3 py-4",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const RegionData: SelectDataType[] = [
    {
        id: 1,
        option: 'England',
        value:'england',
    },
    {
        id: 2,
        option: 'Scotland',
        value:'scotland'
    },   
    {
        id: 3,
        option: 'Wales',
        value:'wales'
    },   
    {
        id: 4,
        option: 'Northern Ireland',
        value:'northern ireland'
    },   
];
