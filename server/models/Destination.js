import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  rating: Number,
  tours: Number
});

export default mongoose.model('Destination', destinationSchema);
