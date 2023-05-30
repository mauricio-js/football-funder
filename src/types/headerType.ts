export interface MenuItemType {
  title: string,
  href: string,
  children: ButtonItemType[]
};
export interface HamburgerMenuItemType {
  title: string,
  href: string,
  children?: ButtonItemType[]
};
export interface ButtonItemType {
  title: string,
  href: string,
};

export interface AccountMenuDataType { 
  id: number,
  title: string
};
