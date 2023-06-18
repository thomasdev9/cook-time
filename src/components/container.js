import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

function container({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">{children}</Container>
    </React.Fragment>
  );
}

export default container;
