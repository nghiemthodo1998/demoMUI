import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Product = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            height="350"
            image="https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-adidas.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Product;
