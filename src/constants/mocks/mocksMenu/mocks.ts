import { GiHorseHead } from "react-icons/gi";
import { FaRegObjectGroup } from "react-icons/fa"; 
import { CgWebsite } from "react-icons/cg";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiDelphi } from "react-icons/si";
import { IMenuDefault, IMenuDrawerDefault, IMenuOptions } from "../../../interface/InterfaceMenu/interface.menu";
import { VscDebugConsole } from "react-icons/vsc";
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
    href: "/lives/1",
 
  },
  {
    id: 3,
    name: "Aulas",
    href: "/aulas/1",
  },
  {
    id: 4,
    name: "Comunidade",
    href: "/comunidade",
  },
 /*
   {
    id: 5,
    name: "Preciso de Ajuda",
    href: "/ajuda",
  },

 
 */
  
];

export const itemsMenu: IMenuOptions[] = [
  {
    id: 1,
    name: "Getting Start Delphi",
    description: "Curso Getting Started no Delphi",
    href: "/cursos/1/1",
    icon: SiDelphi,
  },
  
  { 
    id: 2,
    name: "Delphi e IntraWeb",
    description: "Curso de Desenvolvimento de aplicações web",
    href: "/cursos/2/1",
    icon: CgWebsite,
  },
  {
    id: 3,
    name: "API Rest Com Horse",
    description: "Curso de API´S com Horse",
    href: "/cursos/3/1",
    icon: GiHorseHead,
  },
  {
    id: 4,
    name: "Desenvolvimento Desktop",
    description: "Curso de Desenvolvimento Desktop",
    href: "/cursos/4/1",
    icon: TbDeviceDesktopAnalytics,
  },
  {
    id: 5,
    name: "Debug com Delphi",
    description: "Minicurso para Debug com Delphi",
    href: "/cursos/5/1",
    icon: VscDebugConsole,
  },
  {
    id: 6,
    name: "Delphi POO",
    description: "Curso de Programação Orientada a Objetos com Delphi",
    href: "/cursos/6/1",
    icon: FaRegObjectGroup,
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
    href: "/lives/1",
 
  },
  {
    id: 3,
    name: "Aulas",
    href: "/aulas/1",
  },
  {
    id: 4,
    name: "Comunidade",
    href: "/comunidade",
  },
 /*
   {
    id: 5,
    name: "Preciso de Ajuda",
    href: "/ajuda",
  },

 
 */

  
];
