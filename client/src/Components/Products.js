import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavRoute from '../Route/NavRoute';
import { Container, Typography } from '@mui/material';
import Filter from './Filter';
import ListProduct from './ListProduct';

const Products = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Filter />
            </Grid>
            <Grid item xs={9}>
              <ListProduct />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Products;
