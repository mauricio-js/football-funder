
import { AccountPageTabButtonNameType,CardLabelType } from "types"
import { BiMap } from 'react-icons/bi'
import { FaUsers} from 'react-icons/fa'

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