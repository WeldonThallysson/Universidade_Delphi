import { z } from "zod"
import { schemaLogin } from "../../../constants/schemas/schemaLogin"
import { useAuthentication } from "../../../services/service.auth"
import { toast } from "react-toastify"
import { useStorage } from "../../useStorage/useStorage"
import { KeyStorage } from "../../../constants/keys/key.localstorage"
import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation"
import { ROUTES } from "../../../routes/paths"
import { useLoading } from "../../../store/loading"
import { useGetCountTotalCategory } from "../../../services/service.category"
import { useGetCountTotalClass } from "../../../services/service.class"
import { useGetCountTotalCourses } from "../../../services/service.couses"
import { useGetCountTotalLive } from "../../../services/service.lives"
import { useDashboards } from "../../../store/dashboard"



export const useDashboard = () => {
  
    const {mutate: getCountTotalCategory} = useGetCountTotalCategory()
    const {mutate: getCountTotalClass} = useGetCountTotalClass()
    const {mutate: getCountTotalCourses} = useGetCountTotalCourses()
    const {mutate: getCountTotalLive} = useGetCountTotalLive()

    const {loading,handleActiveLoading,handleInactiveLoading} = useLoading()
    const {dataDashboard,handleDataDashboard,handleSelectTab} = useDashboards()

    const handleDashboard = () => {
        handleActiveLoading()
        try {
            getCountTotalCategory(undefined, {
                onSuccess: (res) => {
                    handleDataDashboard({
                        category: res,
                    })
                },
                onError: (err) => {
                 
                    toast.error(err.message)
                    console.log(err)
                }
            })
            getCountTotalClass(undefined, {
                onSuccess: (res) => {
                    handleDataDashboard({
                        class: res,
                    })
                },
                onError: (err) => {
                 
                    toast.error(err.message)
                    console.log(err)
                }
            })
            getCountTotalCourses(undefined, {
                onSuccess: (res) => {
                    handleDataDashboard({
                        courses: res,
                    })
                },
                onError: (err) => {
                 
                    toast.error(err.message)
                    console.log(err)
                }
            })
            getCountTotalLive(undefined, {
                onSuccess: (res) => {
                    handleDataDashboard({
                        lives: res,
                    })
                },
                onError: (err) => {
                 
                    toast.error(err.message)
                    console.log(err)
                }
            })

            handleInactiveLoading()
      
        }catch(err){
            console.log(err)
            handleInactiveLoading()
        }
        finally {
            handleInactiveLoading()
        }
    

    }
    const dataDashboardFormated = [
        { id: 2, path: ROUTES.CATEGORIES_DASHBOARD, label: "Categorias", value: dataDashboard?.category, icon: 'category_search', color: "#4caf50" },
        { id: 3, path: ROUTES.COURSES_DASHBOARD,label: "Cursos", value: dataDashboard?.courses, icon: "school", color: "#ff9800" },
        { id: 4,path: ROUTES.CLASS_DASHBOARD, label: "Aulas", value: dataDashboard?.class, icon: "play_circle", color: "#2196f3" },
        { id: 5, path: ROUTES.LIVES_DASHBOARD,label: "Lives", value: dataDashboard?.lives, icon: "videocam", color: "#f44336" },
    ];
      

    return {
        loading,
        dataDashboardFormated,
        handleDashboard,
        handleSelectTab
   
    }
}