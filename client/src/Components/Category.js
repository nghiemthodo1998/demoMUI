import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image="https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-adidas.jpg"
        alt="green iguana"
        width="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
