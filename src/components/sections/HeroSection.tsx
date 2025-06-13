import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { FaPlay } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ color: 'white', maxWidth: 600 }}>
         <Typography
  variant="h1"
  sx={{
    fontSize: { xs: '2.5rem', md: '4rem' },
    mb: 3,
    lineHeight: 1.2
  }}
>
  Discover Your Next<br />Adventure
</Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Choose from our curated experiences, customized for every
kind of traveler.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ 
                px: 4, 
                py: 1,
                fontSize: '1.1rem'
              }}
            >
              BOOK NOW
            </Button>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;