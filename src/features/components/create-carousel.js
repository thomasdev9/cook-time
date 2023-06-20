import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Carousel from '../ui/carousel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function CreateCarousel({ title, subtitle, slides, slidesPerView, spaceBetween }) {
  return (
    <Container>
      <HeaderWrapper>
        <Typography variant="h6" sx={{ color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
          {subtitle}
        </Typography>
      </HeaderWrapper>
      <Carousel slides={slides} slidesPerView={slidesPerView} spaceBetween={spaceBetween} />
    </Container>
  );
}

export default CreateCarousel;
