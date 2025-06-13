import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Typography, Grid, Card, CardMedia, CardContent, Box,Chip,Skeleton
} from '@mui/material';
import { FaStar, FaMapMarkerAlt,FaRupeeSign } from 'react-icons/fa';
import { fetchDestinations } from '../../services/api';

const DestinationSkeleton: React.FC = () => (
  <Card>
    <Skeleton variant="rectangular" height={200} />
    <CardContent>
      <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 1 }} />
      <Skeleton variant="text" sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton variant="rectangular" width={60} height={24} />
        <Skeleton variant="rectangular" width={80} height={24} />
      </Box>
    </CardContent>
  </Card>
);

const DestinationsSection: React.FC = () => {
  const { data: destinations, isLoading, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations,
  });

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">Failed to load destinations</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
            color: 'primary.main'
          }}
        >
          Explore Most Popular Destinations
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Discover amazing places around India with our carefully curated destinations
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <DestinationSkeleton />
              </Grid>
            ))
          : destinations?.map((destination) => (
              <Grid item xs={12} sm={6} md={4} key={destination.id}>
                <Card sx={{ height: '100%', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={destination.image}
                    alt={destination.name}
                    sx={{ height: 250, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {destination.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2 }}
                    >
                      {destination.description}
                    </Typography>
                                              
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Chip
                        icon={<FaStar style={{ color: '#fbbf24' }} />}
                        label={destination.rating}
                        variant="outlined"
                        size="small"
                      />
                      <Chip
                        icon={<FaMapMarkerAlt />}
                        label={`${destination.tours} Tours`}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default DestinationsSection;