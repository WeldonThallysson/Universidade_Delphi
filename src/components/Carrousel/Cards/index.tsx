import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Importando os estilos de paginação
import "swiper/css/navigation"; // Importando os estilos de paginação
import { Cards } from "../../Cards";
import { IClassRoom } from "../../../interface/InterfaceCourse/interface.classroom";
import { Box } from "@mui/material";
import { Navigation } from "swiper/modules";

type CardProps = {
  optionsCards: any[];
  slidesPerView?: number | null;
  spaceBeetWeenItens?: number | null;
  handleBtnPrimary?: (item: string) => void;
  handleBtnSecond?: (item: string) => void;
  handleActionCard?: (item: IClassRoom & { path: string }) => void;
};

/*
      // Dots desativados por padrão // modules={[Pagination,Navigation]}    
      navigation// Inclui o módulo de paginação  
      pagination={showDots ? { clickable: true } : false} // Ativa/desativa os dots com base no parâmetro
*/
export const Card = ({
  optionsCards,
  slidesPerView,
  spaceBeetWeenItens,
  handleActionCard,
 
}: CardProps) => {
  return (
    <Swiper
    modules={[Navigation]}
    navigation
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        370: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.66,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: spaceBeetWeenItens ?? 25,
        },
        1440: {
          slidesPerView: 4.2,
          spaceBetween: spaceBeetWeenItens ?? 25,
        },
        1500: {
          slidesPerView: slidesPerView ?? 4,
          spaceBetween: spaceBeetWeenItens ?? 25,
        },
        1900: {
          slidesPerView: optionsCards.length > 5 ? slidesPerView ?? 5.2 : slidesPerView ?? 5 ,
          spaceBetween: spaceBeetWeenItens ?? optionsCards.length > 5 ?  15 : 0 ,
        },
        2000: {
          slidesPerView: optionsCards.length > 5 ? slidesPerView ?? 6.2 : slidesPerView ?? 5,
          spaceBetween: spaceBeetWeenItens ?? optionsCards.length > 5 ?  15 : 0 ,
        },

      }}
      
      style={{
        padding: "1rem 0.5rem 2.5rem 0.5rem",
        borderRadius: 25,
      }}
    >
      {optionsCards.map((item, index) => (
        <Box key={item.id}>
          <SwiperSlide key={index}>
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
