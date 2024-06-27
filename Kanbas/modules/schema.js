import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    module: String
}, { _id: false });

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    course: String,
    lesson: [lessonSchema]
},
  { collection: "modules" }
);
export default moduleSchema;