export interface ILinkedList {
  link: string;
  label: string;
}

export interface INavItems extends ILinkedList {
  option?: ILinkedList[];
}
