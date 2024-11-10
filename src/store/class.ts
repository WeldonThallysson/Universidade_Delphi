import { create } from 'zustand';
import { ROUTES } from '../routes/paths'; 
import { IResponseGetAllClass } from '../interface/Services/interface.class.services';


interface IUseLoading {
    dataClass: IResponseGetAllClass | null;
    handleDataClass: (item: IResponseGetAllClass) => void;
}

export const useClassState = create<IUseLoading>((set) => ({
    dataClass: null,
    handleDataClass: (item) => set(() => ({
        dataClass: item
    })),

}));


