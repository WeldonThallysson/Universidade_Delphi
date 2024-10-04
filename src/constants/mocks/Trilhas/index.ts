import { aulasApiRestHorse } from "../Aulas/ApiRestHorse"
import { aulasWebinarsUniversidadeDelphi } from "../Aulas/AulasPrincipais"
import { aulasMaratonaIntraWeb } from "../Aulas/MaratonaIntraWeb"
import { desvendandoDebugDelphi } from "../Aulas/MiniCursoDebugDelphi"
import { delphiPoo } from "../Aulas/MiniCursoDelphiPoo"
import { minicursoDesktop } from "../Aulas/MiniCursoDesenvolvimentoDesktop"
import { criandoPrimeiraAplicacao } from "../Aulas/CriandoPrimeiraAplicacao"

const Auditorio = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Auditorio')
const PrimeirosPassos = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Primeiros Passos')
const LinguagensRecursos = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop, ...delphiPoo].filter((item) => item.category === 'Linguagens e Recursos')
const Apps = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Apps')
const UXUI = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'UI / UX')
const Multicamadas = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Multicamadas')
const Empreendedorismo = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Empreendedorismo')
const Lab = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo].filter((item) => item.category === 'Lab')

export const Trails = [
    {
        id: 1,
        title: 'Auditório',
        description: '',
        tag: 'Auditorio',
        classrooms: Auditorio
    },
    
    {
        id: 2,
        title: 'Lab',
        description: '',
        tag: 'Lab',
        classrooms: Lab
    },

    
    {
        id: 3,
        title: 'Primeiros Passos',
        description: '',
        tag: 'Start',
        classrooms: PrimeirosPassos
    },

    {
        id: 4,
        title: 'Apps',
        description: '',
        tag: 'Apps',
        classrooms: Apps
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
        title: 'UI / UX',
        description: '',
        tag: 'UI/UX',
        classrooms: UXUI
    },
    {
        id: 6,
        title: 'Linguagens e Recursos',
        description: '',
        tag: 'Linguagens',
        classrooms: LinguagensRecursos
    },
   

    {
        id: 7,
        title: 'Multicamadas',
        description: '',
        tag: 'Multicamadas',
        classrooms: Multicamadas
    },

    {
        id: 8,
        title: 'Empreendedorismo',
        description: '',
        tag: 'Empreendedorismo',
        classrooms: Empreendedorismo
    },


    
]