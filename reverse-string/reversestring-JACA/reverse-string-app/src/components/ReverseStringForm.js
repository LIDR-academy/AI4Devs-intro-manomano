import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ReverseStringForm = ({ input, handleInputChange, handleReverseClick }) => (
  <Box display="flex" alignItems="center">
    <TextField 
      label="Enter text"
      variant="outlined"
      fullWidth
      value={input}
      onChange={handleInputChange}
      placeholder="I'm a string reverser"
      margin="normal"
    />
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleReverseClick}
      sx={{ ml: 2 }}
    >
      Reverse 🔄
    </Button>
  </Box>
);

export default ReverseStringForm;
