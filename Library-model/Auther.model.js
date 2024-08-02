import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    birthDate: {
      type: Date
    }
  }, { timestamps: true });
  
  const Author = mongoose.model('Author', authorSchema);
  