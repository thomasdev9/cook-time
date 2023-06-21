import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import SearchBar from '../features/ui/search-bar';
import CreateCarousel from '../features/components/create-carousel';
import { categoriesChips } from '../shared/setup/home';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);

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
        <CreateCarousel
          title="Categories"
          subtitle="View All"
          slides={categoriesChips}
          slidesPerView="auto"
          spaceBetween={5}
        />
      </Grid>
    </Box>
  );
}

export default Home;
