import { aulasMaratonaIntraWeb } from "../Aulas/MaratonaIntraWeb";

export const optionsFirstCarrouselCard = [
  {
    id: 1,
    title: "Delphi",
    data: [
      {
        id: 1,
        img: aulasMaratonaIntraWeb[0].img,
        title: aulasMaratonaIntraWeb[0].title,
        description: aulasMaratonaIntraWeb[0].description,
        tag: aulasMaratonaIntraWeb[0].tag,
        path: `cursos/${aulasMaratonaIntraWeb[0].idCourse}/${aulasMaratonaIntraWeb[0].id}`,
      },
      {
        id: 2,
        img: aulasMaratonaIntraWeb[1].img,
        title: aulasMaratonaIntraWeb[1].title,
        tag: aulasMaratonaIntraWeb[1].tag,
        description: aulasMaratonaIntraWeb[1].description,
        path: `cursos/${aulasMaratonaIntraWeb[1].idCourse}/${aulasMaratonaIntraWeb[1].id}`,
      },
      {
        id: 3,
        img: aulasMaratonaIntraWeb[2].img,
        title: aulasMaratonaIntraWeb[2].title,
        tag: aulasMaratonaIntraWeb[2].tag,
        description: aulasMaratonaIntraWeb[2].description,
        path: `cursos/${aulasMaratonaIntraWeb[2].idCourse}/${aulasMaratonaIntraWeb[2].id}`,
      },
      {
        id: 4,
        img: aulasMaratonaIntraWeb[3].img,
        title: aulasMaratonaIntraWeb[3].title,
        tag: aulasMaratonaIntraWeb[3].tag,
        description: aulasMaratonaIntraWeb[3].description,
        path: `cursos/${aulasMaratonaIntraWeb[3].idCourse}/${aulasMaratonaIntraWeb[3].id}`,
      },

      {
        id: 5,
        img: aulasMaratonaIntraWeb[4].img,
        title: aulasMaratonaIntraWeb[4].title,
        tag: aulasMaratonaIntraWeb[4].tag,
        description: aulasMaratonaIntraWeb[4].description,
        path: `cursos/${aulasMaratonaIntraWeb[4].idCourse}/${aulasMaratonaIntraWeb[4].id}`,
      },
    ],
  },
];
