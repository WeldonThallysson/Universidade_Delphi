import { create } from 'zustand'; 
import { IResponseGetAllLive } from '../interface/Services/interface.live.services';


interface IUseLoading {
    dataLive: IResponseGetAllLive | null;
    handleDataLive: (item: IResponseGetAllLive) => void;

}

export const useLiveState = create<IUseLoading>((set) => ({
    dataLive: null,
    handleDataLive: (item) => set(() => ({
        dataLive: item
    })),
}));


