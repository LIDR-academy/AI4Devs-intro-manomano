import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Tooltip } from '@mui/material';

const ResultLabel = ({ reversed }) => {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(reversed);
  };

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ mr: 2, transition: 'opacity 0.5s', opacity: reversed ? 1 : 0 }}
      >
        {reversed || "resrever gnirts a m'I"}
      </Typography>
      {reversed && (
        <Tooltip title="Copy to clipboard">
          <ContentCopyIcon 
            onClick={handleCopyClick}
            sx={{ cursor: 'pointer' }}
            aria-label="Copy to clipboard"
          />
        </Tooltip>
      )}
    </Box>
  );
};

export default ResultLabel;
