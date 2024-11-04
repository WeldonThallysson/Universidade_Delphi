import { create } from 'zustand';

interface IPaginations {
    page: number;
    limit: number
    handleChangePage: (page: number) => void;
}

export const usePaginations = create<IPaginations>((set) => ({
    page: 1,
    limit: 10,
    handleChangePage: (item) => set(() => ({
        page: item
    }))
}));
