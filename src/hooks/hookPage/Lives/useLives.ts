import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";
import { useState } from "react";

import { livesUniversidadeDelphi } from "../../../constants/mocks/Lives";
import { ILives } from "../../../interface/interfaceLive/interface.live";
type PropsParams = {
  idLive: number;
};

export const useLives = () => {
  const { handleNavigation } = useCustomNavigation();
  const [allLives, setAllLives] = useState<ILives[]>([]);
  const [liveSelected, setLive] = useState<ILives>();

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
