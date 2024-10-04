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

type PropsParams = {
    idAula?: number;
    category?: string;
};

export const useClassRoom = () => {
  const { handleNavigation } = useCustomNavigation();
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


  return {
    handleNavigation,
    handleFilterClassSelected,
    handleFilterAllClass,
    allClass,
    classSelected,
  };
};
