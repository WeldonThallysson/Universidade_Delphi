import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Importando estilos de paginação
import "swiper/css/navigation"; // Importando estilos de navegação

// Direct React component imports
// Pagination module// Importando os módulos de paginação e navegação
import { Cards } from "../../Cards";
import { IClassRoom } from "../../../interface/InterfaceCourse/interface.classroom";
import { Box } from "@mui/material";

type CardProps = {
  optionsCards: any[];
  slidesPerView?: number | null;
  spaceBeetWeenItens?: number | null;
  handleBtnPrimary?: (item: string) => void;
  handleBtnSecond?: (item: string) => void;
  handleActionCard?: (item: IClassRoom & { path: string }) => void;
};

export const Card = ({
  optionsCards,
  slidesPerView,
  spaceBeetWeenItens,
  handleActionCard,
}: CardProps) => {
  return (
    <Swiper
      spaceBetween={spaceBeetWeenItens ?? 45}
      slidesPerView={slidesPerView ?? 4}
      style={{
        padding: "0.5rem  0.5rem",
      }}
      // Ativando a navegação
      // Adicionando os módulos de paginação e navegação
    >
      {optionsCards.map((item, index) => (
        <Box key={item.id}>
          <SwiperSlide key={index}>
            {" "}
            {/* Adicionando uma chave única */}
            <Cards.Default
              img={item.img}
              title={item.title}
              tag={item.tag}
              description={item.description}
              handleActionCard={() => {
                handleActionCard && handleActionCard(item);
              }}
              titleBtnPrimary={item.titleBtnPrimary}
              titleBtnSecond={item.titleBtnSecond}
            />
          </SwiperSlide>
        </Box>
      ))}
    </Swiper>
  );
};
