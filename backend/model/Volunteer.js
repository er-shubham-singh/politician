import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer