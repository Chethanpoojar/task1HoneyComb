import React from 'react';
import './topSection.css';
import { Box, Divider, Icon, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';

const TopSection = () => {

  const handleClick = () => {
    window.location.href = 'mailto:info@krishnaenzytech.com';
  };

  return (
    <Box className="topSection">
      <div className="backgroundImage">
        <div className="rightText">
          <div style={{padding:5}}>
            <Typography variant="h5">Special supplements for Health</Typography>
            <Typography variant="h5">are available on request</Typography>
            <Divider />
            <Typography variant="body1">Specification / Product data sheets are available on request</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon>
                <Email color="success"/>
              </Icon>
              <Typography variant="body1" onClick={handleClick} style={{ cursor: 'pointer', color: 'green' }}>info@krishnaenzytech.com</Typography>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding:5}} className='additionalImage'><img width="100%" height="100%" src='https://images.pexels.com/photos/9951386/pexels-photo-9951386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></div>
    </Box>
  );
}

export default TopSection;

