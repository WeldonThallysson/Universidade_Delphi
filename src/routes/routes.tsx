import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "../components/Layouts";
import { Home } from "../pages/Home";
import { ROUTES } from "./paths";
import Community from "../pages/Community";
import Lives from "../pages/Lives";
import ClassRoom from "../pages/Classroom";
import Courses from "../pages/Courses";
import DetailsCourses from "../pages/Courses/DetailsCourse";
import { LayoutDashboard } from "../components/Layouts/LayoutDashboard";
import HomeDashboard from "../pages/Dashboard/HomeDashboard";
import Login from "../pages/Auth/login";
import CoursesDashboard from "../pages/Dashboard/CoursesDashboard";
import ClassDashboard from "../pages/Dashboard/ClassDashboard";
import CategoryDashboard from "../pages/Dashboard/CategoriesDashboard";
import LivesDashboard from "../pages/Dashboard/LivesDashboard";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import RedefinePassword from "../pages/Auth/RedefinePassword";


export const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layouts/>,
        children: [
            {   
                path: ROUTES.HOME,
                element:<Home/>
            },
            {
                path: ROUTES.COURSES,
                element: <Courses/>
            },
            {
                path: ROUTES.COURSEINDIVIDUAL,
                element: <DetailsCourses/>
            },
            {
                path: ROUTES.CLASSROOMINDIVIDUAL,
                element: <ClassRoom/>
            },
            {
                path: ROUTES.LIVES,
                element: <Lives/>
            },
            {
                path: ROUTES.COMMUNITY,
                element: <Community/>
            },
            {
                path: ROUTES.HELP,
                element: <Community/>
            }

        ]
    },
    {
        path: ROUTES.LOGIN,
        element: <Login/>
    },
    {
        path: ROUTES.RECOVER_PASSWORD,
        element: <RecoverPassword/>
    },
    {
        path: ROUTES.REDEFINE_PASSWORD,
        element: <RedefinePassword/>
    },
    {
        path: ROUTES.DASHBOARD,
        element: <LayoutDashboard/>,
        children: [
            {
                path: ROUTES.DASHBOARD,
                element: <HomeDashboard/>
            },
            {

                path: ROUTES.CATEGORIES_DASHBOARD,
                element: <CategoryDashboard/>


            },
            {

                path: ROUTES.COURSES_DASHBOARD,
                element: <CoursesDashboard/>

            },

            {

                path: ROUTES.CLASS_DASHBOARD,
                element: <ClassDashboard/>


            },
            {

                path: ROUTES.LIVES_DASHBOARD,
                element: <LivesDashboard/>


            },
        

        ]
    }
])