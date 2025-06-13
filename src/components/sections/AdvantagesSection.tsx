import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { FaClock, FaCalendarAlt, FaFileAlt, FaUsers } from 'react-icons/fa';
import { Pointer } from 'lucide-react';

const advantages = [
  {
    icon: <FaClock size={40} />,
    title: 'Save Time',
    description: 'Quick and easy booking process with instant confirmation'
  },
  {
    icon: <FaCalendarAlt size={40} />,
    title: 'Free Reschedule',
    description: 'Flexible booking options with free date changes'
  },
  {
    icon: <FaFileAlt size={40} />,
    title: 'Trusted Reports',
    description: 'Verified reviews and authentic travel experiences'
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Expert Guides',
    description: 'Professional local guides for authentic experiences'
  }
];

const AdvantagesSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
        py: 8,
        color: 'white'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              fontWeight: 600
            }}
          >
            Our Advantages
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  backgroundColor: 'rgba(243, 234, 236, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  textAlign: 'center',
                  '&:hover': {
                    cursor:"Pointer",
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box 
                    sx={{ 
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      color: '#fbbf24'
                    }}
                  >
                    {advantage.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography variant="body1">
                    {advantage.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;