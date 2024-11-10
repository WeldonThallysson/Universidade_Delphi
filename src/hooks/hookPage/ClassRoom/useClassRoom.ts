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
import { IClassItem, IParamsClass } from "../../../interface/Services/interface.class.services";

type PropsParams = {
    idAula?: number;
    category?: string;
};

export const useClassRoom = () => {
  const { handleNavigation } = useCustomNavigation();
  const {mutate: getAllClass } = useGetAllClass()
  const {page, limit,handleChangePage} = usePaginations()

  const {dataClass,handleDataClass} = useClassState()
  
  const {loading, handleActiveLoading,handleInactiveLoading} = useLoading()


  const [allClass, setAllClass] = useState<ILives[]>([]);
  const [classSelected, setClassSelected] = useState<ILives>();
  const allClassUD = [...criandoPrimeiraAplicacao,...aulasWebinarsUniversidadeDelphi,...aulasApiRestHorse,...aulasMaratonaIntraWeb,...desvendandoDebugDelphi,...minicursoDesktop,...delphiPoo]
  const handleFilterClassSelected = ({
    idAula,
  }: PropsParams) => {
    const live = aulasWebinarsUniversidadeDelphi.find((live) => live.id === idAula);
    setClassSelected(live);
  };

  const handleFilterAllClass = ({ category }: PropsParams) => {
    if (category) {
      const otherLives = allClassUD.filter(
        (cls: ILives) => cls.category === category && cls.id !== classSelected?.id
      );
      setAllClass(otherLives);
    }
  };

  const handleGetAllClass = ({name,tag,data,tutor}: IParamsClass) => {
    const params = {
        name,
        tag,
        data,
        tutor,
        page, 
        limit
    }
    handleActiveLoading()
    getAllClass(params, {
        onSuccess: (res) => {
            handleInactiveLoading()
            handleDataClass(res)
        },
        onError: (err) => {
            handleInactiveLoading()
            console.log(err.message)
        }
        
    })
}

const dataClassFormatted = dataClass?.items.map((item) => {
  return {
     name: item.name,
     description: item.description,
     tag:item.tag,
     tutor: item.tutor,
     actions: [
      { label: 'Edit', icon: 'edit', onClick: (row: IClassItem) => console.log('Edit:', row.id) },
      { label: 'Delete', icon: 'delete', onClick: (row: IClassItem) => console.log('Delete:', row.id) },
    ],
  }
}) 


  return {
    dataClassFormatted,
    loading,
    handleGetAllClass,
    handleNavigation,
    handleFilterClassSelected,
    handleFilterAllClass,
    allClass,
    classSelected,
    handleChangePage,
    page,
  };
};
