import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Box, Grid } from '@mui/material';
import CardComponent from '../features/ui/card-component';
import CatalogLoader from '../features/content-loaders/catalog-loader';
import { getRecipeData } from '../shared/utils';
import { RecipesAPI } from '../api/recipes-api';
import { categories } from '../shared/setup/recipes';

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
  font-weight: 500;
  padding: 15px;

  ${(props) =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `}

  @media only screen and (max-width: 360px) {
    padding: 15px 0px;
  }
`;

function Recipes() {
  const { query } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    RecipesAPI.getRecipes({ query }).then((res) => {
      setData(res?.hits);
      setIsLoading(false);
    });
  }, []);

  const isCategory = (query) => categories.includes(query);

  return (
    <Box>
      <Grid container direction="column">
        <Header capitalize={isCategory(query)}>{isCategory(query) ? query : `Search results for ${query}`}</Header>
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
