import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavRoute from '../Route/NavRoute';
import { Container, Typography } from '@mui/material';
import Filter from './Filter';
import Product from './Product';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ListProduct = () => {
  return (
    <>
      <Item sx={{ background: 'rgb(240,240,240)' }}>
        <Typography
          align="left"
          variant="h5"
          sx={{ color: 'black', fontWeight: '600' }}
        >
          Products
        </Typography>
        <Product />
      </Item>
    </>
  );
};

export default ListProduct;
