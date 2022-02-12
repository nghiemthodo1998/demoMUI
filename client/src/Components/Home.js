import { Container } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';
import ListCategory from './ListCategory';

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Carousel />
        <ListCategory />
      </Container>
    </div>
  );
};

export default Home;
