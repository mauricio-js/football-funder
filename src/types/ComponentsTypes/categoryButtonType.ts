export interface CategoryButtonType { 
   label: string,
    value: string,
    checked: boolean,
    disabled?:boolean,
    onSelect: () => void,
    classes?:string
}