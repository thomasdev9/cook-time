import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, Grid } from '@mui/material';
import SearchBar from '../features/ui/search-bar';
import CreateCarousel from '../features/components/create-carousel';
import { categoriesChips, getRecipesCards } from '../shared/setup/home';
import { fetchRecommendations } from '../redux/slices/recommendationsSlice';
import { isEmpty } from 'lodash';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  const dispatch = useDispatch();
  const recommendations = useSelector((state) => {
    const data = state.recommendations;
    return [data.recommended, data.recently, data.popular, data.trending];
  });

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, []);

  return (
    <Box>
      <Grid container direction="column">
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Hello,
        </Typography>
        <Typography variant="h4" gutterBottom>
          What would you like to cook today?
        </Typography>
        <SearchBar setSearchQuery={setSearchQuery} />
        <CreateCarousel title="Categories" slides={categoriesChips} slidesPerView="auto" spaceBetween={5} />
        {recommendations?.map(
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
        )}
      </Grid>
    </Box>
  );
}

export default Home;
