import { aulasApiRestHorse } from "../Aulas/ApiRestHorse"
import { criandoPrimeiraAplicacao } from "../Aulas/CriandoPrimeiraAplicacao"
import { aulasMaratonaIntraWeb } from "../Aulas/MaratonaIntraWeb"
import { desvendandoDebugDelphi } from "../Aulas/MiniCursoDebugDelphi"
import { delphiPoo } from "../Aulas/MiniCursoDelphiPoo"
import { minicursoDesktop } from "../Aulas/MiniCursoDesenvolvimentoDesktop"


export const Courses = [
    {
        id: 1,
        title: 'Getting Start no Delphi',
        description: '',
        tag: 'Started',
        classrooms: criandoPrimeiraAplicacao
    },
    {
        id: 2,
        title: 'Curso de Delphi Intra Web',
        description: '',
        tag: 'web',
        classrooms: aulasMaratonaIntraWeb
    },
    {
        id: 3,
        title: 'API Rest Com Horse',
        description: '',
        tag: 'Back',
        classrooms: aulasApiRestHorse
    },
    {
        id: 4,
        title: 'Desenvolvimento Desktop',
        description: '',
        tag: 'Desenvolvimento',
        classrooms: minicursoDesktop
    },
   /*
            {
        id: 4,
        title: 'Programação Orientada a Objetos com Delphi',
        description: '',
        tag: 'Delphi Poo',
        classrooms: delphiPoo
    },
   */
    {
        id: 5,
        title: 'Debug com Delphi',
        description: '',
        tag: 'Desktop',
        classrooms: desvendandoDebugDelphi
    },

    {
        id: 6,
        title: 'Programação Orientada a Objetos com Delphi',
        description: '',
        tag: 'Delphi Poo',
        classrooms: delphiPoo
    },
]