import mongoose from "mongoose";

// Department Schema
const departmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    head: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  }, {timestamps: true});
  
  export const Department = mongoose.model('Department', departmentSchema);
  
  
  