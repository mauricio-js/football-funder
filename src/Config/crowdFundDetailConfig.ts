import { CardLabelType, userFundListDataType, userCommentListDataType } from 'types'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
import { RiHeart3Line,RiHeart3Fill } from "react-icons/ri";

export const CrowdDetailDateCardLabelData:CardLabelType = {
    icon:FaRegCalendarAlt,
    backgroundColor: "bg-gray-100",
    textColor: "text-green-70", 
    text: "11th April 2023",
}
export const CrowdDetailCommentCardLabelData:CardLabelType = {
    icon:BiMessageRounded,
    backgroundColor: "bg-gray-100",
    textColor: "text-green-70", 
    text: "15 Comments",
}
export const CrowdDetailClubCardLabelData:CardLabelType = {
    icon:FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}
export const CrowdDetailLocationCardLabelData:CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white", 
    text: "Durham, England",
}

export const UserFundListData: userFundListDataType[] = [
    {
        name: "Tom",
        fund: 10000,
        startDay:"1 week"
    },
    {
        name: "David",
        fund: 5000,
        startDay:"1 day"
    },
    {
        name: "Alex",
        fund: 5000,
        startDay:"5 day"
    },
    {
        name: "Alice",
        fund: 3500,
        startDay:"6 days"
    },
    {
        name: "Ema",
        fund: 2000,
        startDay:"6 days"
    },
]

export const UserCommentListData: userCommentListDataType[] = [
    {
        chat: "Love this project! Will support until the end ❤️.",
        commentNum : 0,
        Icon : RiHeart3Line,
        startDay : "1 day",
        name : "David"
    },
    {
        chat: "Wohoo let’s go!!! ⚡️",
        commentNum : 24,
        Icon : RiHeart3Fill,
        startDay : "1 day",
        name : "Ema"
    },
    {
        chat: "Such a nice thing! Supporting.",
        commentNum : 0,
        Icon : RiHeart3Line,
        startDay : "1 day",
        name : "Alice"
    },
];
        