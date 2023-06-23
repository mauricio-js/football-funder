
import { AccountPageTabButtonNameType,CardLabelType, MyDropdownType } from "types"
import { BiMap } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs";
import { HiOutlinePencil, HiOutlineEye, } from "react-icons/hi";
import { TbArrowsDiff } from 'react-icons/tb'
import { AiOutlineCloseCircle, AiOutlineGift } from 'react-icons/ai'
import { BiShareAlt,BiLinkAlt} from 'react-icons/bi'

export const AccountLocationCardLabelData: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Durham, England",
}
export const AccountClubTypeCardLabelData:CardLabelType = {
    icon:FaUsers,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Club",
}

export const AccountPageTabButtonNameData: AccountPageTabButtonNameType[] = [
    {
        name: "My Profile",
        value:"myProfile"
    },
    {
        name: "Fundraising",
        value:"fundraising"
    },
    {
        name: "Advertising",
        value:"advertising"
    },
    {
        name: "Sponsorship",
        value:"sponsorship"
    },
    {
        name: "Withdraw Funds",
        value:" withdrawFunds"
    },
    {
        name: "Manage Rewards",
        value:"manageReward"
    },
    {
        name: "Help",
        value:"help"
    },
]
export const CardMenuTabButtonNameData: AccountPageTabButtonNameType[] = [
    
        {
            icon:HiOutlineEye,
            name: "View",
            value:"view"
        },
        {
            icon:HiOutlinePencil,
            name: "Edit",
            value:"edit"
        },
        {
            icon:TbArrowsDiff,
            name: "Withdraw Funds",
            value:"withdrawfunds"
        },
        {
            icon:AiOutlineCloseCircle,
            name: "End Fundraiser",
            value:"endfundraiser"
        },
        {
            icon:AiOutlineGift,
            name: "Manage Rewards",
            value:"managereward"
        },
        
    ]


export const CardDropdownData: MyDropdownType = {
   
    icon:BsThreeDots,
    children: [
        {
            icon:HiOutlineEye,
            title: "View",
        },
        {
            icon:HiOutlinePencil,
            title: "Edit",
        },
        {
            icon:TbArrowsDiff,
            title: "Withdraw Funds",
        },
        {
            icon:AiOutlineCloseCircle,
            title: "End Fundraiser",
        },
        {
            icon:AiOutlineGift,
            title: "Manage Rewards",
        },
    ]
}
export const AccountDropdownData: MyDropdownType = {

    icon:BsThreeDots,
    children: [
        {
            icon:BiShareAlt,
            title: "Share",
        },
        {
            icon:BiLinkAlt,
            title: "Copy link",
        },
        
    ]
}