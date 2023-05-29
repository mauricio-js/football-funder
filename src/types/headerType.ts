export interface MenuItem {
  title: string,
  href: string,
  children?: MenuItem[]
};

export interface AccountMenuDataType { 
  id: number,
  title: string
};
