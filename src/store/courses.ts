import { create } from 'zustand';
import { IResponseGetAllCourses } from '../interface/Services/interface.courses.services';


interface IUseLoading {
    dataCourses: IResponseGetAllCourses | null;
    handleDataCourses: (item: IResponseGetAllCourses) => void;
}

export const useCoursesState = create<IUseLoading>((set) => ({
    dataCourses: null,
    handleDataCourses: (item) => set(() => ({
        dataCourses: item
    })),

}));


