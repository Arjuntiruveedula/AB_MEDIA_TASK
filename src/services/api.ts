const API_BASE_URL = 'http://localhost:5000/api';

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  tours: number;
}

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  location: string;
}


export const fetchDestinations = async (): Promise<Destination[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/destinations`);
    if (!response.ok) {
      throw new Error('Failed to fetch destinations');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const fetchTopSellingPackages = async (): Promise<TourPackage[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/packages/top-selling`);
    if (!response.ok) {
      throw new Error('Failed to fetch tour packages');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tour packages:', error);
    throw error;
  }
};


export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};
