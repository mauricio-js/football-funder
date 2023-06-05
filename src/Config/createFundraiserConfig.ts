import {CategoryButtonType, ContactPhoneNumberType, InputType, SelectDataType} from 'types';
export const FundraiserCategoryData: CategoryButtonType[] = [
    
    {   id:"1",
        label: "Club",
        name:"club",
        value: "club",
    },
    {id:"2",
        label: "Individual",
        name: "individual",
        value:"individual"
    },
    {id:"3",
        label: "Supporters’ Trust",
        name: "support",
        value:"support"
        
    },
    {id:"4",
        label: "Local community",
        name: "local",
        value:"local"
    },
    {id:"5",
        label: "Foundation",
        name: "foundation",
        value:"foundation"
    },
    {id:"6",
        label: "League",
        name: "league",
        value:"league"
    },
    {id:"7",
        label: "Charity",
        name: "charity",
        value:"charity"
    },
    {id:"8",
        label: "Singing Section / Ultras",
        name: "ultras",
        value:"ultras"
    },
    {id:"9",
        label: "Agency / Rights holder",
        name: "agency",
        value:"agency"
    },
    {id:"10",
        label: "Podcast / Vlog",
        name: "podcast",
        value:"podcast"
    },
    {id:"11",
        label: "Advertiser/Sponsor",
        name: "advertiser",
        value:"advertiser"
    },
    {id:"12",
        label: "Other",
        name: "other",
        value:"other"
    },
]
  
export const FundraiserNationData: CategoryButtonType[] = [
    
    {   id:"13",
        label: "England",
        name:"england",
        value: "england",
    },
    {id:"14",
        label: "Scotland",
        name: "scotland",
        value:"scotland"
    },
    {id:"15",
        label: "Wales",
        name: "wales",
        value:"wales"
        
    },
    {id:"16",
        label: "Northern Ireland",
        name: "northern Ireland",
        value:"northern Ireland"
    }
]

export const ContactOrganization: InputType = { 
        id: 1,
        label: "Organization Name",
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
        label: "Confirm Password",
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
