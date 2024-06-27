import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    _id: {type: String, index: false},
    name: { type: String, required: true},
    number: { type: String, required: true},
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    image: String,
    description: String,
  },
  { collection: "courses" }
);
export default coursesSchema;

