// Room Schema
import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
    roomNumber: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['General', 'Private', 'ICU', 'Emergency'],
    },
    status: {
      type: String,
      enum: ['Available', 'Occupied', 'Maintenance'],
      default: 'Available',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
  }, {timestamps: true});
  
  export const Room = mongoose.model('Room', roomSchema);