const mongoose = require("mongoose");
const Apartment = require("../Models/ApartmentModel");
const apartmentSeedData = require("./apartmentsSeedData");

async function seedAdmin() {
  // Connect to the database
  await mongoose.connect("mongodb://localhost:27017/nawy");

  //First loop through all
  for (let index = 0; index < apartmentSeedData?.length; index++) {
    const currentApartment = apartmentSeedData[index];
    // Check if apartment using the reference number already exists
    const existingApartment = await Apartment.findOne({
      referenceNumber: currentApartment?.referenceNumber,
    });
    if (!existingApartment) {
      // Create apartment
      await Apartment.create(currentApartment);
      console.log("Apartment added successfully");
    } else {
      console.log("Apartment already exists");
    }
  }
  // Close the database connection
  await mongoose.disconnect();
}

// Execute the admin seeder
seedAdmin()
  .then(() => {
    console.log("Apartments seeding completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error seeding apartments:", err);
    process.exit(1);
  });
