import mongoose from 'mongoose';

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  medicalHistory: {
    type: [String],
  }
}, {timestamps: true});

export const Patient = mongoose.model('Patient', patientSchema);
