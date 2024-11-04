import { create } from 'zustand';
import { ROUTES } from '../routes/paths';

interface IDashboardItem {
    category?:  number | null,
        courses?: number | null,
        class?: number | null,
        lives?: number | null,
}

interface IUseLoading {
    dataDashboard: IDashboardItem | null;
    tabSelected: string | null,
    handleDataDashboard: (item: IDashboardItem) => void;
    handleSelectTab: (item?: string | null) => void;
}

export const useDashboards = create<IUseLoading>((set) => ({

    tabSelected: ROUTES.DASHBOARD,
    dataDashboard: null,
    handleDataDashboard: (item) => set((state) => ({
        dataDashboard: {
            ...state.dataDashboard,
            ...item
        }
    })), // Ativa o loading 
    handleSelectTab: (item) => set(() => ({
        tabSelected: item,
    })),
}));


