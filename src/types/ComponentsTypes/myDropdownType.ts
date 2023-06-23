import { IconType } from "react-icons/lib";

export interface MyDropdownType {
    title?: string,
    href?: string,
    icon?:any,
    children: MyDropdownItemType[]
};
export interface MyDropdownItemType {
    title?: string,
    href?: string,
    icon?:any
};