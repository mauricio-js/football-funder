export interface RadioButtonType  { 
    name: string,
    value: string,
    checked: boolean,
    checkboxStyle:boolean,
    disabled?:boolean,
    onSelect: () => void,
    classes?: string,
    textStyle:string,
}