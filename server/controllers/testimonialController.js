import Testimonial from '../models/Testimonial.js';

export const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.json({ success: true, data: testimonials });
};
