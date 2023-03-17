import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const projectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"] },
  clientId: { type: ObjectId, ref: "Client" },
});

export default mongoose.model("Project", projectSchema);
