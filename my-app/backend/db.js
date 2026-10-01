const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;

    const fetched_data = db.collection("food_items");
    const foodCategory = db.collection("foodCategory");

    const data = await fetched_data.find({}).toArray();
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;

    console.log("Data fetched & stored in global variables");
  } catch (err) {
    console.log("MongoDB connection error ---", err);
  }
};

module.exports = mongoDB;

