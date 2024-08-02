import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    membershipDate: {
      type: Date,
      default: Date.now
    },
    borrowedBooks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }]
  }, { timestamps: true });
  
  const User = mongoose.model('User', userSchema);
  