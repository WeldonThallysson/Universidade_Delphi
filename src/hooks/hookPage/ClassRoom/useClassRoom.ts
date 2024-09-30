import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";
import { useState } from "react";
import { ILives } from "../../../interface/interfaceLive/interface.live";
import { aulasWebinarsUniversidadeDelphi } from "../../../constants/mocks/Aulas/AulasPrincipais";
type PropsParams = {
    idAula: number;
};

export const useClassRoom = () => {
  const { handleNavigation } = useCustomNavigation();
  const [allClass, setAllClass] = useState<ILives[]>([]);
  const [classSelected, setClassSelected] = useState<ILives>();

  const handleFilterClassSelected = ({
    idAula,
  }: PropsParams) => {
    const live = aulasWebinarsUniversidadeDelphi.find((live) => live.id === idAula);
    setClassSelected(live);
  };

  const handleFilterAllClass = ({ idAula}: PropsParams) => {
    if (idAula) {
      const otherLives = aulasWebinarsUniversidadeDelphi.filter(
        (cls: any) => cls.id !== idAula
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
