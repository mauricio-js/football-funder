import { CardLabelType } from "types"

import { BiMap } from 'react-icons/bi'
import { TbUsersGroup} from 'react-icons/tb'

export const ProfileLocationLabelData: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Durham, England",
}

export const ProfileClubLabelData: CardLabelType = {
    icon:TbUsersGroup,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Club",
}