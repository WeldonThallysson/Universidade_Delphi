import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "../components/Layouts";
import { Home } from "../pages/Home";
import { ROUTES } from "./paths";
import Community from "../pages/Community";
import Lives from "../pages/Lives";
import ClassRoom from "../pages/Classroom";
import Courses from "../pages/Courses";
import DetailsCourses from "../pages/Courses/DetailsCourse";


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
    }
])