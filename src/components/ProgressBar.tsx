import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Typography, Box } from '@mui/material';

interface ProgressBarProps {
  title: string;
  value: number;
  color: string;
}

const progressBarStyle = { width: '5em', height: '5em' } as React.CSSProperties;

function CircularProgressWithLabel(props: CircularProgressProps & ProgressBarProps) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} style={progressBarStyle} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
