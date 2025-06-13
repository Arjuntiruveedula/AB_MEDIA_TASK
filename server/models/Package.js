import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  duration: String,
  price: Number,
  originalPrice: Number,
  rating: Number,
  reviews: Number,
  highlights: [String]
});

export default mongoose.model('Package', packageSchema);
