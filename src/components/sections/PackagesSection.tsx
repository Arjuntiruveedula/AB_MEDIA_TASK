import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Typography, Grid, Card, CardMedia, CardContent, Box,Chip,Button,Skeleton
} from '@mui/material';
import { FaStar, FaClock, FaRupeeSign } from 'react-icons/fa';
import { fetchTopSellingPackages } from '../../services/api';

const PackageSkeleton: React.FC = () => (
  <Card>
    <Skeleton variant="rectangular" height={220} />
    <CardContent>
      <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 1 }} />
      <Skeleton variant="text" sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" width={80} height={24} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Skeleton variant="rectangular" width={100} height={32} />
        <Skeleton variant="rectangular" width={80} height={24} />
      </Box>
      <Skeleton variant="rectangular" width="100%" height={36} />
    </CardContent>
  </Card>
);

const PackagesSection: React.FC = () => {
  const { data: packages, isLoading, error } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchTopSellingPackages,
  });

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">Failed to load tour packages</Typography>
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
          Top Selling Tour Packages of India
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Handpicked tour packages with the best experiences and value for money
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PackageSkeleton />
              </Grid>
            ))
          : packages?.map((pkg) => (
              <Grid item xs={12} sm={6} md={4} key={pkg.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={pkg.image}
                    alt={pkg.title}
                    sx={{ height: 250, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h5" 
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {pkg.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 2, flexGrow: 1 }}
                    >
                      {pkg.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <Chip
                            key={index}
                            label={highlight}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FaRupeeSign size={16} color="#0891b2" />
                          <Typography 
                            variant="h6" 
                            sx={{ fontWeight: 700, color: 'primary.main' }}
                          >
                            {pkg.price.toLocaleString()}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            textDecoration: 'line-through',
                            color: 'text.secondary'
                          }}
                        >
                          ₹{pkg.originalPrice.toLocaleString()}
                        </Typography>
                      </Box>
                      <Chip
                        icon={<FaClock />}
                        label={pkg.duration}
                        size="small"
                        color="secondary"
                        variant="outlined"
                      />
                    </Box>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FaStar style={{ color: '#fbbf24' }} />
                        <Typography variant="body2">
                          {pkg.rating} ({pkg.reviews} reviews)
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 'auto' }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default PackagesSection;