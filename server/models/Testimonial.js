import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  rating: Number,
  review: String,
  location: String
});

export default mongoose.model('Testimonial', testimonialSchema);
