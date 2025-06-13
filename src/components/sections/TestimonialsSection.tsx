import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {Box,Typography,Grid,Card,CardContent,Avatar,Skeleton
} from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { fetchTestimonials, Testimonial } from '../../services/api';

const TestimonialSkeleton: React.FC = () => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Skeleton variant="circular" width={60} height={60} />
        <Box sx={{ ml: 2, flex: 1 }}>
          <Skeleton width="60%" height={24} />
          <Skeleton width="40%" height={20} />
        </Box>
      </Box>
      <Skeleton width="80%" height={20} />
      <Skeleton width="100%" height={20} />
    </CardContent>
  </Card>
);

const TestimonialsSection: React.FC = () => {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">Failed to load testimonials</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
            color: 'primary.main'
          }}
        >
          What Our Travelers Say
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Real experiences from real travelers who have explored India with us
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TestimonialSkeleton />
              </Grid>
            ))
          : testimonials?.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} style={{ color: '#fbbf24', marginRight: 2 }} />
                      ))}
                    </Box>

                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      "{testimonial.review}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
