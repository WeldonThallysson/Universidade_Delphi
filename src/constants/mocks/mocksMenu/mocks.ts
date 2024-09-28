import { GiHorseHead } from "react-icons/gi";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiDelphi } from "react-icons/si";
import { IMenuDefault, IMenuDrawerDefault, IMenuOptions } from "../../../interface/InterfaceMenu/interface.menu";


export const headerMenu = () => {

return [
  {
      id: 1,
      label: "",
      path: "/",
  }
]

}   


export const menuDefault: IMenuDefault[] = [
  {
    id: 1,
    name: "Cursos",
    href: "/cursos/1/1",

  },
  {
    id: 2,
    name: "Lives",
    href: "/lives/1/1",
 
  },
  {
    id: 3,
    name: "Comunidade",
    href: "/community",
  },
  {
    id: 4,
    name: "Preciso de Ajuda",
    href: "/helpme",
  },
];

export const itemsMenu: IMenuOptions[] = [
  { 
    id: 1,
    name: "Delphi e IntraWeb",
    description: "Curso de Desenvolvimento de aplicações web",
    href: "/cursos/1/1",
    icon: SiDelphi,
  },
  {
    id: 2,
    name: "API Rest Com Horse",
    description: "Curso de API´S com Horse",
    href: "/cursos/2/1",
    icon: GiHorseHead,
  },
  {
    id: 3,
    name: "Desenvolvimento Desktop",
    description: "Curso de Desenvolvimento Desktop",
    href: "/cursos/3/1",
    icon: TbDeviceDesktopAnalytics,
  },
  {
    id: 4,
    name: "Delphi Poo",
    description: "Curso de Programação orientada a objetos com Delphi",
    href: "/cursos/3/1",
    icon: FaRegObjectUngroup,
  },
  
];


export const itemsMenuDrawer: IMenuDrawerDefault[] = [

  {
    id: 1,
    name: "Cursos",
    href: "/cursos/1/1",
    items: itemsMenu ?? []

  },
  {
    id: 2,
    name: "Lives",
    href: "/lives/1/1",
 
  },
  {
    id: 3,
    name: "Comunidade",
    href: "/community",
  },
  {
    id: 4,
    name: "Preciso de Ajuda",
    href: "/helpme",
  },

  
];
