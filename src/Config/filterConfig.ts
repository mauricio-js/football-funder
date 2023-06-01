import { SearchDataType, ButtonDataType } from "types"
import { MdSearch } from "react-icons/md";
import FilterIcon from "Assets/images/svg/explore/filter-icon.svg";

export const FilterSearchData: SearchDataType = {
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
}
export const FiterButtonProperty: ButtonDataType = {
    backgroundColor: "text-white",
    text: "Filter & Sort",
    image: FilterIcon,
    width: "w-[150px]",
    height: "h-[50px]",
    border:"border-[1px] border-gray-100",
}