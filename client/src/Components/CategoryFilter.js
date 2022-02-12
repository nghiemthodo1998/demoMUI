import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Typography } from '@mui/material';

const CategoryFilter = () => {
  return (
    <>
      <FormControl sx={{ display: 'flex', color: 'black', mt: 2 }}>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ textAlign: 'left', fontWeight: '500', color: 'black' }}
        >
          Category
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ ml: 2 }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CategoryFilter;
