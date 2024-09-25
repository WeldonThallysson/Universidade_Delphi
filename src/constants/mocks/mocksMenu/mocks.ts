import { GiHorseHead } from "react-icons/gi";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiDelphi } from "react-icons/si";


export const headerMenu = () => {

return [
  {
      id: 1,
      label: "",
      path: "/",
  }
]

}   

export const itemsMenu = [
  {
    name: "Delphi e IntraWeb",
    description: "Curso de Desenvolvimento de aplicações web",
    href: "#",
    icon: SiDelphi,
  },
  {
    name: "API Rest Com Horse",
    description: "Curso de API´S com Horse",
    href: "#",
    icon: GiHorseHead,
  },
  {
    name: "Desenvolvimento Desktop",
    description: "Curso de Desenvolvimento Desktop",
    href: "#",
    icon: TbDeviceDesktopAnalytics,
  },
  {
    name: "Delphi Poo",
    description: "Curso de Programação orientada a objetos com Delphi",
    href: "#",
    icon: FaRegObjectUngroup,
  },
  
];
