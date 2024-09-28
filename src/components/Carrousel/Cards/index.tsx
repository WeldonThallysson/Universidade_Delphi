import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // Importando estilos de paginação
import 'swiper/css/navigation'; // Importando estilos de navegação
import { Navigation, Pagination } from 'swiper/modules';
// Direct React component imports
// Pagination module// Importando os módulos de paginação e navegação
import { Cards } from '../../Cards';

type CardProps = {
    optionsCards: any[];
    slidesPerView?: number | null;
    spaceBeetWeenItens?: number | null
    handleBtnPrimary?: (item: string) => void;
    handleBtnSecond?: (item: string) => void;
    handleActionCard?: (item: string) => void;
}

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
            
             // Ativando a navegação
            // Adicionando os módulos de paginação e navegação
        >
            {optionsCards.map((item, index) => (
                <SwiperSlide key={index}> {/* Adicionando uma chave única */}
                    <Cards.Default
                        img={item.img}
                        title={item.title}
                        tag={item.tag}
                        description={item.description}
                        handleActionCard={() => {handleActionCard && handleActionCard(item.path)}}
                        titleBtnPrimary={item.titleBtnPrimary}
                        titleBtnSecond={item.titleBtnSecond}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
