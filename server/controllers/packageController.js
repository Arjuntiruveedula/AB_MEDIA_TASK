import Package from '../models/Package.js';

export const getTopPackages = async (req, res) => {
  const packages = await Package.find({});
  res.json({ success: true, data: packages });
};
