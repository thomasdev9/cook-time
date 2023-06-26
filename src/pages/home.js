import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';
import CreateCarousel from '../features/components/create-carousel';
import { categoriesChips, getRecipesCards } from '../shared/setup/home';
import { fetchRecommendations } from '../redux/slices/recommendationsSlice';
import { isEmpty } from 'lodash';
import CatalogLoader from '../features/content-loaders/catalog-loader';
import CategoriesLoader from '../features/content-loaders/categories-loader';
import { formatRecommendations } from '../shared/utils';

function Home() {
  const dispatch = useDispatch();
  const recommendations = useSelector((state) => state.recommendations);
  const isLoading = useSelector((state) => state.recommendations.loading);

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, []);

  return (
    <Box>
      <Grid container direction="column">
        {isLoading ? (
          <CategoriesLoader />
        ) : (
          <CreateCarousel title="Categories" slides={categoriesChips} slidesPerView="auto" spaceBetween={5} />
        )}
        {isLoading ? (
          <CatalogLoader />
        ) : (
          formatRecommendations(recommendations)?.map(
            (rec, index) =>
              !isEmpty(rec.data) && (
                <CreateCarousel
                  title={rec?.title}
                  slides={getRecipesCards(rec?.data)}
                  slidesPerView="auto"
                  spaceBetween={10}
                  key={index}
                />
              )
          )
        )}
      </Grid>
    </Box>
  );
}

export default Home;
