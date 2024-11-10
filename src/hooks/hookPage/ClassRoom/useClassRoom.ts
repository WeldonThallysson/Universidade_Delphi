import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";
import { useState } from "react";
import { ILives } from "../../../interface/interfaceLive/interface.live";
import { aulasWebinarsUniversidadeDelphi } from "../../../constants/mocks/Aulas/AulasPrincipais";
import { criandoPrimeiraAplicacao } from "../../../constants/mocks/Aulas/CriandoPrimeiraAplicacao";
import { aulasApiRestHorse } from "../../../constants/mocks/Aulas/ApiRestHorse";
import { aulasMaratonaIntraWeb } from "../../../constants/mocks/Aulas/MaratonaIntraWeb";
import { desvendandoDebugDelphi } from "../../../constants/mocks/Aulas/MiniCursoDebugDelphi";
import { minicursoDesktop } from "../../../constants/mocks/Aulas/MiniCursoDesenvolvimentoDesktop";
import { delphiPoo } from "../../../constants/mocks/Aulas/MiniCursoDelphiPoo";
import { useGetAllClass } from "../../../services/service.class";
import { usePaginations } from "../../../store/paginations";
import { useLoading } from "../../../store/loading";
import { useClassState } from "../../../store/class";
import {
  IClassItem,
  IParamsClass,
} from "../../../interface/Services/interface.class.services";
import { useCategoryState } from "../../../store/category";
import { useGetCategories } from "../../../services/service.category";
import {
  useGetAllCourses,
  useGetCourses,
} from "../../../services/service.couses";
import { useCoursesState } from "../../../store/courses";

type PropsParams = {
  idAula?: number;
  category?: string;
};

export const useClassRoom = () => {
  const { handleNavigation } = useCustomNavigation();
  const { mutate: getAllClass } = useGetAllClass();
  const { mutate: getCategories } = useGetCategories();
  const { mutate: getCourses } = useGetCourses();
  const { page, limit, handleChangePage } = usePaginations();
  const { dataClass, handleDataClass } = useClassState();
  const { dataAllCourses, handleDataAllCourses } = useCoursesState();
  const { loading, handleActiveLoading, handleInactiveLoading } = useLoading();

  const { dataCategories, handleDataCategories } = useCategoryState();

  const handleGetCategories = () => {
    handleActiveLoading();
    getCategories(undefined, {
      onSuccess: (res) => {
        handleInactiveLoading();
        handleDataCategories(res);
      },
      onError: (err) => {
        handleInactiveLoading();
        console.log(err.message);
      },
    });
  };

  const handleGetCourse = () => {
    handleActiveLoading();
    getCourses(undefined, {
      onSuccess: (res) => {
        handleInactiveLoading();
        handleDataAllCourses(res);
      },
      onError: (err) => {
        handleInactiveLoading();
        console.log(err.message);
      },
    });
  };

  const handleFilterClassSelected = ({ idAula }: PropsParams) => {
    const live = aulasWebinarsUniversidadeDelphi.find(
      (live) => live.id === idAula
    );
    setClassSelected(live);
  };

  const handleFilterAllClass = ({ category }: PropsParams) => {
    if (category) {
      const otherLives = allClassUD.filter(
        (cls: ILives) =>
          cls.category === category && cls.id !== classSelected?.id
      );
      setAllClass(otherLives);
    }
  };

  const handleGetAllClass = ({
    name,
    id_category,
    id_course,
    tag,
    data,
    tutor,
  }: IParamsClass) => {
    const params = {
      name,
      tag,
      id_category,
      id_course,
      data,
      tutor,
      page,
      limit,
    };
    handleActiveLoading();
    getAllClass(params, {
      onSuccess: (res) => {
        handleInactiveLoading();
        handleDataClass(res);
      },
      onError: (err) => {
        handleInactiveLoading();
        console.log(err.message);
      },
    });
  };
  
  const [allClass, setAllClass] = useState<ILives[]>([]);
  const [classSelected, setClassSelected] = useState<ILives>();
  const allClassUD = [
    ...criandoPrimeiraAplicacao,
    ...aulasWebinarsUniversidadeDelphi,
    ...aulasApiRestHorse,
    ...aulasMaratonaIntraWeb,
    ...desvendandoDebugDelphi,
    ...minicursoDesktop,
    ...delphiPoo,
  ];
 

  const dataClassFormatted = dataClass?.items
  .filter((item) => item !== null && item !== undefined) // Remove nulos e indefinidos
  .map((item) => ({
    name: item.name,
    description: item.description,
    course: item.courses?.name ?? 'Nenhum vinculado',
    category: item.category?.name ?? 'Nenhum vinculado',
    tag: item.tag,
    tutor: item.tutor,
    actions: [
      { label: "Edit", icon: "edit", onClick: (row: IClassItem) => console.log("Edit:", row.id) },
      { label: "Delete", icon: "delete", onClick: (row: IClassItem) => console.log("Delete:", row.id) },
    ],
  }));

  const dataOptionsCategoriesFormated = dataCategories?.items.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });

  const dataOptionsCoursesFormated = dataAllCourses?.items.map((item) => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });

  return {
    dataClassFormatted,
    loading,
    allClass,
    classSelected,
    dataCategories,
    page,
    dataOptionsCategoriesFormated,
    dataOptionsCoursesFormated,
    handleGetCourse,
    handleGetCategories,
    handleChangePage,
    handleGetAllClass,
    handleNavigation,
    handleFilterClassSelected,
    handleFilterAllClass,
  };
};
