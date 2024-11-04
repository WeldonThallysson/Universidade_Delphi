


export enum ROUTES {
    HOME = '/',
    CLASSROOM = '/aulas',
    CLASSROOMINDIVIDUAL = '/aulas/:categoria/:idAula',
    COURSES = '/cursos',
    COURSEINDIVIDUAL = '/cursos/:idCurso/:idAula',
    LIVES = '/lives/:idLive',
    COMMUNITY ='/comunidade',
    HELP = '/ajuda',


    LOGIN = "/login",
    RECOVER_PASSWORD = "/recoverpassword",
    REDEFINE_PASSWORD = "/redefinepassword/:token",

    DASHBOARD = "/dashboard" ,
    
    CATEGORIES_DASHBOARD = '/dashboard/categories',
    CATEGORIES_DASHBOARD_REGISTER = '/dashboard/categories/register',
    CATEGORIES_DASHBOARD_EDIT = '/dashboard/categories/:id/edit',

    COURSES_DASHBOARD = '/dashboard/courses',
    COURSES_DASHBOARD_REGISTER = '/dashboard/courses/register',
    COURSES_DASHBOARD_EDIT = '/dashboard/courses/:id/edit',

    CLASS_DASHBOARD = '/dashboard/class/',
    CLASS_DASHBOARD_REGISTER = '/dashboard/class/register',
    CLASS_DASHBOARD_EDIT = '/dashboard/class/:id/edit',

    LIVES_DASHBOARD = '/dashboard/lives',
    LIVES_DASHBOARD_REGISTER = '/dashboard/lives/register',
    LIVES_DASHBOARD_EDIT = '/dashboard/lives/:id/edit',

    ACCOUNT_DASHBOARD = '/dashboard/account'

}