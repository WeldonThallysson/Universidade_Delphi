import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";
import { useState } from "react";

import { livesUniversidadeDelphi } from "../../../constants/mocks/Lives";
import { ILives } from "../../../interface/interfaceLive/interface.live";
import { IParamsLive } from "../../../interface/Services/interface.live.services";
import { useGetCategories } from "../../../services/service.category";
import { useGetAllLive } from "../../../services/service.lives";
import { usePaginations } from "../../../store/paginations";
import { useLoading } from "../../../store/loading";
import { useCategoryState } from "../../../store/category";
type PropsParams = {
  idLive: number;
};

export const useLives = () => {
  const { handleNavigation } = useCustomNavigation();
  const [allLives, setAllLives] = useState<ILives[]>([]);
  const [liveSelected, setLive] = useState<ILives>();

  const { mutate: getAllLives } = useGetAllLive();
  const { mutate: getCategories } = useGetCategories();
  const { mutate: getCourses } = useGetCourses();
  const { page, limit, handleChangePage } = usePaginations();
 
  const { loading, handleActiveLoading, handleInactiveLoading } = useLoading();

  const { dataCategories, handleDataCategories } = useCategoryState();
  name,
  id_category,
  tag,
  data,
  tutor,
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

  const handleGetAllLives = ({
    name,
    id_category,
    id_course,
    tag,
    data,
    tutor,
  }: IParamsLive) => {
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
  
  const handleFilterLiveSelected = ({
    idLive,
  }: PropsParams) => {
    const live = livesUniversidadeDelphi.find((live) => live.id === idLive);
    setLive(live);
  };

  const handleFilterAllLives = ({ idLive}: PropsParams) => {
    if (idLive) {
      // Filtra as outras aulas do mesmo curso
      const otherLives = livesUniversidadeDelphi.filter(
        (cls: any) => cls.id !== idLive
      );
      setAllLives(otherLives);
    }
  };

  return {
    handleNavigation,
    handleFilterLiveSelected,
    handleFilterAllLives,
    allLives,
    liveSelected,
  };
};
