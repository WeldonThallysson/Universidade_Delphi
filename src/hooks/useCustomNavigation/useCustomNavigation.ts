import { useNavigate } from "react-router"



export const useCustomNavigation = () => {
    const navigate = useNavigate();

    const handleNavigation = (item: string) => {
        navigate(item)
    }
    return {
        handleNavigation

    }
}