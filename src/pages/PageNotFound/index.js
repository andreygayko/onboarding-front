import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SentimentVeryDissatisfiedOutlined as SentimentVeryDissatisfiedOutlinedIcon } from '@material-ui/icons';

const PageNotFound = () => {
  return (
    <Box
      style={{
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: 'calc(17% - 10rem)',
      }}>
      <Typography
        color="#cc051f"
        component="h2"
        style={{ fontSize: '10rem', color: '#cc051f' }}
        variant="h2">
        404
        <br />
        <SentimentVeryDissatisfiedOutlinedIcon fontSize="large" />
      </Typography>
    </Box>
  );
};
export default PageNotFound;
