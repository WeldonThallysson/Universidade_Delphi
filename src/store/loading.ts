import { create } from 'zustand';

interface IUseLoading {
    loading: boolean;
    handleActiveLoading: () => void;
    handleInactiveLoading: () => void;
}

export const useLoading = create<IUseLoading>((set) => ({
    loading: false,
    handleActiveLoading: () => set(() => ({ loading: true })), // Ativa o loading
    handleInactiveLoading: () => set(() => ({ loading: false })), // Desativa o loading
}));
