import { create } from 'zustand';
import { ROUTES } from '../routes/paths';
import { IResponseGetAllCategory } from '../interface/Services/interface.category.services';


interface IUseLoading {
    dataCategory: IResponseGetAllCategory | null;
    handleDataDashboard: (item: IResponseGetAllCategory) => void;
}

export const useCategoryState = create<IUseLoading>((set) => ({
    dataCategory: null,
    handleDataDashboard: (item) => set(() => ({
        dataCategory: item
    })),

}));


