import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, Grid } from '@mui/material';
import { fetchRecipesByCategory } from '../redux/slices/categoriesSlice';
import CardComponent from '../features/ui/card-component';
import CatalogLoader from '../features/content-loaders/catalog-loader';
import { getRecipeData } from '../shared/utils';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 15px;
  padding: 15px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 360px) {
    padding: 0px;
  }
`;

const Header = styled.h6`
  font-size: 24px;
  color: rgb(51, 51, 51);
  text-transform: capitalize;
  font-weight: 500;
  padding: 15px;

  @media only screen and (max-width: 360px) {
    padding: 15px 0px;
  }
`;

function Recipes() {
  const location = useLocation();
  const { category } = location.state;
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    if (category && category !== '') {
      return state?.categories[category]?.data?.hits;
    }
    return [];
  });
  const isLoading = useSelector((state) => state.categories.loading);

  useEffect(() => {
    if (category) {
      dispatch(fetchRecipesByCategory({ category }));
    }
  }, []);

  return (
    <Box>
      <Grid container direction="column">
        <Header>{category}</Header>
        {!isLoading ? (
          <Container>
            {data?.map((item, index) => (
              <CardComponent {...getRecipeData(item?.recipe)} key={index} />
            ))}
          </Container>
        ) : (
          <CatalogLoader />
        )}
      </Grid>
    </Box>
  );
}

export default Recipes;
