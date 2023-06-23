import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent } from '@mui/material';
import styled from 'styled-components';
import { formatTime } from '../../shared/utils';

const style = {
  width: window?.screen?.width > 600 ? '156px' : '156px',
  boxShadow: 'rgba(0, 0, 0, 0.08) 4px 4px 16px 0px',
  marginBottom: '10px',
  borderRadius: '8px',
};

const Title = styled.h6`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: 700;
  color: rgb(51, 51, 51);
  line-height: 20px;
  margin-bottom: 5px;
  height: 40px;
`;

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
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 70px;

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

function CardComponent({ title, totalTime, cuisineType, image, id }) {
  return (
    <Link to={`/recipes/${id}`} state={{ id, totalTime, cuisineType, image }}>
      <Card sx={style}>
        <CardMedia component="img" alt="card-img" height="125" image={image}></CardMedia>
        <CardContent>
          <Title>{title}</Title>
          <InfoWrapper>
            <CategoryLabel>{cuisineType}</CategoryLabel>
            <InfoLabel>{formatTime(totalTime)}</InfoLabel>
          </InfoWrapper>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CardComponent;
