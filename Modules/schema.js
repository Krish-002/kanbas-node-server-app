import mongoose from "mongoose";
import assignmentSchema from "../Assignments/schema";
const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    description: String,
    course: String,
    lessons: [assignmentSchema],
  },
  { collection: "modules" });
export default moduleSchema;