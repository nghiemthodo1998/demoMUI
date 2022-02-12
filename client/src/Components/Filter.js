import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavRoute from '../Route/NavRoute';
import { Container, Typography } from '@mui/material';
import CategoryFilter from './CategoryFilter';
import PriceSlide from './PriceSlide';
import RatingFilter from './RatingFilter';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Filter = () => {
  return (
    <>
      <Item sx={{ background: 'rgb(240,240,240)', pl: 2, pr: 2 }}>
        <Typography
          align="left"
          variant="h4"
          sx={{ color: 'black', fontWeight: '600' }}
        >
          Filter
        </Typography>
        <CategoryFilter />
        <RatingFilter />
        <PriceSlide />
      </Item>
    </>
  );
};

export default Filter;
