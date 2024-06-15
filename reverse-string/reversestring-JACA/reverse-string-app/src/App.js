import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReverseStringForm from './components/ReverseStringForm';
import ResultLabel from './components/ResultLabel';
import { reverseString } from './utils/stringUtils';

const App = () => {
  const [input, setInput] = useState("");
  const [reversed, setReversed] = useState("");

  const handleReverseClick = () => {
    setReversed(reverseString(input));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setReversed(reverseString(value));
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reverse String
        </Typography>
        <ReverseStringForm 
          input={input} 
          handleInputChange={handleInputChange} 
          handleReverseClick={handleReverseClick}
        />
        <ResultLabel reversed={reversed} />
      </Box>
    </Container>
  );
}

export default App;
