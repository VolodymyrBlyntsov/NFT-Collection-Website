import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";   
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import img1 from '../assets/Nfts/bighead_1.svg';
import img2 from '../assets/Nfts/bighead_2.svg';
import img3 from '../assets/Nfts/bighead_3.svg';
import img4 from '../assets/Nfts/bighead_4.svg';
import img5 from '../assets/Nfts/bighead_5.svg';
import img6 from '../assets/Nfts/bighead_6.svg';
import img7 from '../assets/Nfts/bighead_7.svg';
import img8 from '../assets/Nfts/bighead_8.svg';
import img9 from '../assets/Nfts/bighead_9.svg';
import img10 from '../assets/Nfts/bighead_10.svg';
import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
    width: 25vw;
    height: 70vh;
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        background-color: ${props => props.theme.carouselColor};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-button-next{
        color: ${props => props.theme.text};
        right: 0;
        width: 4rem;
        top: 60%;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &:after {
            display: none;
        }
    }
    .swiper-button-prev{
        color: ${props => props.theme.text};
        left: 0;
        top: 60%;
        width: 4rem;
        transform: rotate(180deg);
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        &:after {
            display: none;
        }
    }
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
        pagination={{
            type: 'fraction'
        }}
        scrollbar={{
            draggable: true
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img7} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img8} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img9} alt="The Tadpoles" /> </SwiperSlide>
        <SwiperSlide> <img src={img10} alt="The Tadpoles" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel