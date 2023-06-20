import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import SearchBar from '../features/ui/search-bar';

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
      </Grid>
    </Box>
  );
}

export default Home;
