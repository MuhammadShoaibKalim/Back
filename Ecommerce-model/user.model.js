import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    lowercase:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
    validate: [passwordValidator, "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."],
  },
  role: {
    type: String,
    default: "user",
  },
  address: {
      type:string,
      required:true
  }
},{timestamps:true});

export const UserModel = mongoose.model("user", userSchema); //user is the collection name