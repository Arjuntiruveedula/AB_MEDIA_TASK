import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import connectDB from '../config/db.js';

import Destination from '../models/Destination.js';
import Package from '../models/Package.js';
import Testimonial from '../models/Testimonial.js';

import destinations from './destinations.js';
import packages from './packages.js';
import testimonials from './testimonials.js';

// dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Destination.deleteMany();
    await Package.deleteMany();
    await Testimonial.deleteMany();

    await Destination.insertMany(destinations);
    await Package.insertMany(packages);
    await Testimonial.insertMany(testimonials);

    console.log('Data Seeded ');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
