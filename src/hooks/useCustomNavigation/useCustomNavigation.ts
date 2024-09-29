import { useNavigate } from "react-router";

export const useCustomNavigation = () => {
    const navigate = useNavigate(); 

    // Função para navegação
    const handleNavigation = (item: string) => {
        navigate(item);
    };
 

    return {
        handleNavigation,
    };
};
