import { create } from 'zustand';
import { IResponseGetAllCategory } from '../interface/Services/interface.category.services';


interface IUseLoading {
    dataCategory: IResponseGetAllCategory | null;
    dataCategories: IResponseGetAllCategory | null;
    handleDataCategory: (item: IResponseGetAllCategory) => void;
    handleDataCategories: (item: IResponseGetAllCategory) => void;
}

export const useCategoryState = create<IUseLoading>((set) => ({
    dataCategory: null,
    dataCategories: null,
    handleDataCategory: (item) => set(() => ({
        dataCategory: item
    })),
    handleDataCategories: (item) => set(() => ({
        dataCategories: item
    }))

}));


