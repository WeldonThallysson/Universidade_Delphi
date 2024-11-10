import { create } from 'zustand';
import { IResponseGetAllCourses } from '../interface/Services/interface.courses.services';


interface IUseLoading {
    dataCourses: IResponseGetAllCourses | null;
    dataAllCourses:  IResponseGetAllCourses | null;
    handleDataAllCourses: (item: IResponseGetAllCourses) => void;
    handleDataCourses: (item: IResponseGetAllCourses) => void;
}

export const useCoursesState = create<IUseLoading>((set) => ({
    dataCourses: null,
    dataAllCourses: null,
    handleDataCourses: (item) => set(() => ({
        dataCourses: item
    })),
    handleDataAllCourses: (item) => set(() => ({
        dataAllCourses: item
    })),
}));


