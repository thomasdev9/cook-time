import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import RecipeLoader from '../features/content-loaders/recipe-loader';
import { Tabs, Tab } from '@mui/material';
import { RecipesAPI } from '../api/recipes-api';
import { getSingleRecipeData, formatTime, formatIngredients, formatHealthyLabels, formatDigest } from '../shared/utils';
import { isEmpty } from 'lodash';
import { getTabPanels } from '../shared/setup/single-recipe';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  background: rgb(255, 255, 255);
`;

const MainImage = styled.img`
  width: 100%;
  height: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media only screen and (max-width: 600px) {
    height: 200px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 15px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0px;
`;

const InfoLabel = styled.div`
  color: rgb(155, 155, 155);
  font-size: 14px;
  font-weight: 400;
  padding-right: 5px;
  text-transform: capitalize;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify: flex-start;
  padding: 30px 15px;
  width: 100%;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0px;
`;

function SingleRecipe() {
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState({});
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    RecipesAPI.getRecipeById({ id }).then((recipe) => {
      setData(getSingleRecipeData(recipe?.recipe));
      setLoading(false);
    });
  }, []);

  const handleTabChange = (event, tabIndex) => {
    setCurrentTabIndex(tabIndex);
    console.log(currentTabIndex, event);
  };

  if (isEmpty(data)) return <div></div>;

  return (
    <>
      {!isLoading ? (
        <Container>
          <MainImage src={data?.image} alt="recipe-image" />
          <HeaderWrapper>
            <Title>{data?.title}</Title>
            <InfoWrapper>
              <InfoLabel>{data.cuisineType}</InfoLabel>
              <InfoLabel>{formatTime(data.totalTime)}</InfoLabel>
            </InfoWrapper>
          </HeaderWrapper>
          <SectionWrapper>
            <Tabs aria-label="Tabs" onChange={handleTabChange} value={currentTabIndex}>
              <Tab label="Ingredients" />
              <Tab label="Digest" />
              <Tab label="Health Labels" />
            </Tabs>
            {getTabPanels({
              ingredients: formatIngredients(data?.ingredients),
              healthLabels: formatHealthyLabels(data?.healthLabels),
              digest: formatDigest(data?.digest),
              value: currentTabIndex,
            })}
          </SectionWrapper>
        </Container>
      ) : (
        <LoadingWrapper>
          <RecipeLoader />
        </LoadingWrapper>
      )}
    </>
  );
}

export default SingleRecipe;
