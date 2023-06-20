import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 0px;
`;

function carousel({
  spaceBetween = 50,
  slidesPerView = 3,
  navigation = false,
  pagination = false,
  scrollbar = false,
  breakpoints = null,
  slides,
}) {
  return (
    <Container>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={navigation}
        pagination={pagination}
        scrollbar={scrollbar}
        breakpoints={breakpoints}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default carousel;
