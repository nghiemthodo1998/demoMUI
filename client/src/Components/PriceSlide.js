import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const PriceSlide = () => {
  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', mt: 2 }}>
        <Typography align="left" sx={{ color: 'black' }}>
          Price: ${value[0]} - ${value[1]}
        </Typography>

        <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={10000}
        />
      </Box>
    </>
  );
};

export default PriceSlide;
