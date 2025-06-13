import Destination from '../models/Destination.js';

export const getDestinations = async (req, res) => {
  const destinations = await Destination.find({});
  res.json({ success: true, data: destinations });
};
