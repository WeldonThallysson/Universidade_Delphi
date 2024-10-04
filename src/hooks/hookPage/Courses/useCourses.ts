import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";

import { useState } from "react";
import { Courses } from "../../../constants/mocks/Cursos";
import {
  IClassRoom,
  ICourse,
} from "../../../interface/InterfaceCourse/interface.classroom";
type PropsParams = {
  idCourse: number;
  idClassRoom: number;
};

export const useCourses = () => {
  const { handleNavigation } = useCustomNavigation();
  const [classSelected, setClassSelected] = useState<IClassRoom | null>(null);
  const [allClass, setAllClass] = useState<IClassRoom[]>([]);
  const [courseSelected, setCourseSelected] = useState<ICourse>();

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

  return {
    handleNavigation,
    handleFilterCourseSelected,
    handleFilterAllCourses,
    classSelected,
    courseSelected,
    allClass,
  };
};
