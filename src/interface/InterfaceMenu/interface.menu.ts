import { IconType } from "react-icons";


export interface IMenuOptions {
    id: number,
      name: string,
    description: string,
    href: string,
    icon: IconType,
}

export interface IMenuDefault {
    name: string,
    href: string,
    id: number

}

export interface IMenuDrawerDefault {
    name: string,
    href: string,
    id: number,
    items?: IMenuDefault[] | null

}