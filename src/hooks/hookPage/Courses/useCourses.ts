import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";

import { useState } from "react";
import { Courses } from "../../../constants/mocks/Cursos";
import {
  IClassRoom,
  ICourse,
} from "../../../interface/InterfaceCourse/interface.classroom";
import { getAllCourses, useGetAllCourses } from "../../../services/service.couses";
import { usePaginations } from "../../../store/paginations";
import { useLoading } from "../../../store/loading";
import { useCoursesState } from "../../../store/courses";
import { ICoursesItem, IParamsCourses } from "../../../interface/Services/interface.courses.services";
import { useGetCategories } from "../../../services/service.category";
import { useCategoryState } from "../../../store/category";
type PropsParams = {
  idCourse: number;
  idClassRoom: number;
};

export const useCourses = () => {
  const { handleNavigation } = useCustomNavigation();
  const [classSelected, setClassSelected] = useState<IClassRoom | null>(null);
  const [allClass, setAllClass] = useState<IClassRoom[]>([]);
  const [courseSelected, setCourseSelected] = useState<ICourse>();
  const {mutate: getAllCourses } = useGetAllCourses()
  const {mutate: getCategories} = useGetCategories() 
  const {page, limit,handleChangePage} = usePaginations()

  const {dataCourses,handleDataCourses} = useCoursesState()
  
  const {loading, handleActiveLoading,handleInactiveLoading} = useLoading()
  const {dataCategories, handleDataCategories} = useCategoryState()


  const handleGetCategories = ( ) => {

      handleActiveLoading()
      getCategories(undefined, {
          onSuccess: (res) => {
              handleInactiveLoading()
              handleDataCategories(res)
          },
          onError: (err) => {
              handleInactiveLoading()
              console.log(err.message)
          }
          
      })
  }

  const handleFilterCourseSelected = ({
    idCourse,
    idClassRoom,
  }: PropsParams) => {
    const course = Courses.find((course) => course.id === idCourse);
    setCourseSelected(course);
    if (course) {
      const selectedClass = course.classrooms.find(
        (cls: any) => cls.id === idClassRoom
      );
      selectedClass && setClassSelected(selectedClass);
    }
  };

  const handleFilterAllCourses = ({ idCourse, idClassRoom }: PropsParams) => {
    const course = Courses.find((c) => c.id === idCourse);

    if (course) {
      // Filtra as outras aulas do mesmo curso
      const otherClasses = course.classrooms.filter(
        (cls: any) => cls.id !== idClassRoom
      );
      setAllClass(otherClasses);

     /*
       // Se quiser incluir aulas de outros cursos, adicione-as também
      const otherCourses = Courses.filter((c) => c.id !== idCourse).flatMap(
        (c) => c.classrooms
      );

      setAllClass((prev) => [...prev, ...otherCourses]);
     */
    }
  };

  
  const handleGetAllCourses = ({name,category_id}: IParamsCourses) => {
    const params = {
        name,
        category_id,
        page, 
        limit
    }
    handleActiveLoading()
    getAllCourses(params, {
        onSuccess: (res) => {
            handleInactiveLoading()
            handleDataCourses(res)
        },
        onError: (err) => {
            handleInactiveLoading()
            console.log(err.message)
        }
        
    })
}

 

const dataCoursesFormatted = dataCourses?.items.map((item) => {
  return {
     name: item.name,
     category: item.category?.name ?? 'Nenhum vinculado',
     author: item.users.name,
     actions: [
      { label: 'Edit', icon: 'edit', onClick: (row: ICoursesItem) => console.log('Edit:', row.id) },
      { label: 'Delete', icon: 'delete', onClick: (row: ICoursesItem) => console.log('Delete:', row.id) },
    ],
  }
}) 


const dataOptionsCategoriesFormated = dataCategories?.items.map((item) => {
   return {
     label: item.name,
     value: item.id
   }
})


  return {
    loading,
    page,
    dataCoursesFormatted,
    dataOptionsCategoriesFormated,
    handleGetAllCourses,
    handleNavigation,
    handleFilterCourseSelected,
    handleFilterAllCourses,
    handleChangePage,
    handleGetCategories,
    dataCategories,
    classSelected,
    courseSelected,
    allClass,
  };
};
