import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';

const ratingStar = [5, 4, 3, 2, 1];

const RatingFilter = () => {
  return (
    <>
      <FormControl sx={{ display: 'flex', color: 'black', mt: 2 }}>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ textAlign: 'left', fontWeight: '500', color: 'black' }}
        >
          Rating
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ ml: 2 }}
        >
          {ratingStar.map((star) => (
            <FormControlLabel
              key={star}
              value={star}
              control={<Radio />}
              label={
                <Rating name="read-only" value={star} max={star} readOnly />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RatingFilter;
