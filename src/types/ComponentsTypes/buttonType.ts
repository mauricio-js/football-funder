import { IconType } from "react-icons/lib";
export interface ButtonDataType { 
    backgroundColor?: string,
    padding?: string;
    width?: string,
    height?: string,
    text?:string,
    textColor?: string,
    textSize?: string,
    border?:string,
    handleClick?: () => void;
    image?: string,
    icon?: IconType,
    disabled?:boolean
}