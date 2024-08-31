const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  unitName: { type: String, required: true },
  referenceNumber: { type: String, required: true },
  project: { type: String, required: true },
  image: String,
  areaInMetersSquared: {
    type: Number,
    required: true,
  },
  deliveryYear: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: String,
    required: false,
    default: "In Progress",
  },
  saleType: {
    type: String,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
