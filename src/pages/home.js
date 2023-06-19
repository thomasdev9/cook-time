import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

function Home() {
  return (
    <Box>
      <Grid container direction="column">
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Hello,
        </Typography>
        <Typography variant="h4" gutterBottom>
          What would you like to cook today?
        </Typography>
      </Grid>
    </Box>
  );
}

export default Home;
