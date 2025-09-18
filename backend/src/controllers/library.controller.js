import Library from "../models/library.model.js";

/**
 * Admin creates a library
 */
export const createLibrary = async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Only admins can create libraries" });

  const payload = { ...req.body, createdBy: req.user._id };
  const lib = await Library.create(payload);
  res.status(201).json({ library: lib });
};

/**
 * Update by admin who owns library (or allow all admins)
 */
export const updateLibrary = async (req, res) => {
  const { id } = req.params;
  const lib = await Library.findById(id);
  if (!lib) return res.status(404).json({ error: "Library not found" });

  // Optional: check ownership (lib.createdBy.equals(req.user._id))
  if (req.user.role !== "admin") return res.status(403).json({ error: "Only admins can update libraries" });

  Object.assign(lib, req.body);
  await lib.save();
  res.json({ library: lib });
};

/**
 * Public listing with optional query params: lat, lng, distance (meters), minPrice, maxPrice, facilities
 */
export const listLibraries = async (req, res) => {
  const { lat, lng, distance, minPrice, maxPrice, facilities, page = 1, limit = 20 } = req.query;
  const filter = {};

  if (minPrice || maxPrice) {
    filter.hourlyRate = {};
    if (minPrice) filter.hourlyRate.$gte = Number(minPrice);
    if (maxPrice) filter.hourlyRate.$lte = Number(maxPrice);
  }

  if (facilities) {
    // comma separated
    const facs = facilities.split(",").map(f => f.trim());
    filter.facilities = { $all: facs };
  }

  let query = Library.find(filter);

  if (lat && lng) {
    const dist = distance ? Number(distance) : 5000; // default 5km
    query = query.near({
      near: { type: "Point", coordinates: [Number(lng), Number(lat)] },
      maxDistance: dist
    });
  }

  const libs = await query.skip((page - 1) * limit).limit(Number(limit));
  res.json({ libraries: libs });
};

/**
 * Get library by id
 */
export const getLibrary = async (req, res) => {
  const { id } = req.params;
  const lib = await Library.findById(id);
  if (!lib) return res.status(404).json({ error: "Library not found" });
  res.json({ library: lib });
};

/**
 * Admin delete (soft/hard)
 */
export const deleteLibrary = async (req, res) => {
  const { id } = req.params;
  if (req.user.role !== "admin") return res.status(403).json({ error: "Only admins" });
  await Library.findByIdAndDelete(id);
  res.json({ message: "Library deleted" });
};
