import React from 'react';
import { Container } from '@mui/material';
import HeroSection from './sections/HeroSection';
import DestinationsSection from './sections/DestinationsSection';
import AdvantagesSection from './sections/AdvantagesSection';
import PackagesSection from './sections/PackagesSection';
import TestimonialsSection from './sections/TestimonialsSection';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <DestinationsSection />
      </Container>
      <AdvantagesSection />
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <PackagesSection />
      </Container>
      <TestimonialsSection />
    </div>
  );
};

export default Homepage;