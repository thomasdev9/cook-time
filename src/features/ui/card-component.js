import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

const style = {
  width: window?.screen?.width > 600 ? '240px' : '180px',
  boxShadow: 'rgba(0, 0, 0, 0.08) 4px 4px 16px 0px',
  marginBottom: '50px',
  borderRadius: '8px',
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const CategoryLabel = styled.span`
  color: rgb(155, 155, 155);
  font-size: 12px;
  font-weight: 700;
  padding-right: 5px;

  @media only screen and (max-width: 600px) {
    padding-right: 10px;
  }
`;

const InfoLabel = styled.div`
  color: rgb(155, 155, 155);
  font-size: 12px;
  font-weight: 400;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
`;

const StyledLabelIcon = styled(FaUserAlt)`
  padding-right: 5px;
  font-size: 16px;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

function CardComponent({ title, category, servings, calories, image }) {
  return (
    <Card sx={style}>
      <CardMedia component="img" alt="card-img" height="170" image={image}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: 'text.main', fontSize: '16px' }}>
          {title}
        </Typography>
        <InfoWrapper>
          <CategoryLabel>{category}</CategoryLabel>
          <InfoLabel>
            <StyledLabelIcon />
            {servings} servings
          </InfoLabel>
          {window?.screen?.width > 600 && <InfoLabel>{calories} kcal </InfoLabel>}
        </InfoWrapper>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
