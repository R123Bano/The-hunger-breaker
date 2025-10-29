// const mongoose = require("mongoose");

// const mongoDB = async () => {
//   const mongoURI =
//     "mongodb+srv://Rijvana:Rijvana0bano@cluster0.ygi0lnr.mongodb.net/Thehungerbreakermern?retryWrites=true&w=majority&appName=Cluster0";

//   try {
//     await mongoose.connect(mongoURI);
//     console.log("Connected to MongoDB");

//     //Access collections
//     const db = mongoose.connection.db;
//     const fetched_data = db.collection("food_items");
//     const foodCategory = db.collection("foodCategory");

//     // Fetch data safely
//     const data = await fetched_data.find({}).toArray();
//     const catData = await foodCategory.find({}).toArray();

//     // Store globally (for reuse)
//     global.food_items = data;
//     global.foodCategory = catData;

//     console.log("Data fetched and stored in global variables.");
//   } catch (error) {
//     console.error("MongoDB connection or data fetch error:", error);
//   }
// };

// module.exports = mongoDB;

// const mongoose =require('mongoose');
// // const mongoURL='mongodb+srv://rijvanabano842_db_user:<db_Rijvana@0bano@cluster0.ygi0lnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const mongoURL='mongodb://Rijvana:Rijvana0bano@ac-oddvblu-shard-00-00.ygi0lnr.mongodb.net:27017,ac-oddvblu-shard-00-01.ygi0lnr.mongodb.net:27017,ac-oddvblu-shard-00-02.ygi0lnr.mongodb.net:27017/?ssl=true&replicaSet=atlas-c2e6j1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
// const mongoDB=async()=>{
// await mongoose.connect(mongoURL,{useNewUrlParser:true},(err,result)=>{
//     if(err) console.log("---",err);
//     else{
//     console.log("connected to mongoDB")
//     }
// });
// }
// module.exports=mongoDB;
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://Rijvana:Rijvana0bano@cluster0.ygi0lnr.mongodb.net/Thehungerbreakermern?retryWrites=true&w=majority&appName=Cluster0';

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

    console.log(" Data fetched & stored in global variables");
  } catch (err) {
    console.log(" MongoDB connection error ---", err);
  }
};

module.exports = mongoDB;




