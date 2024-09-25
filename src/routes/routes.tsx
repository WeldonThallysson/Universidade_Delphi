import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "../components/Layouts";
import { Home } from "../pages/Home";
import { ROUTES } from "./paths";


export const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layouts/>,
        children: [
            {   
                path: ROUTES.HOME,
                element:<Home/>
            }

        ]
    }
])