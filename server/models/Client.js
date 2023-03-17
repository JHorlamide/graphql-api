import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

export default mongoose.model("Client", clientSchema);
