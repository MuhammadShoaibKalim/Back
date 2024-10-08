import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
    username :{
        type:String,
        require:true,
        lowercase:true,
        unique:true
    },
    email:{
      type:String,
      required:true,
      lowercase:true
    },
    password:{
      type:String,
      required:true,
      unique:true,
    },

}, {timestamps:true})

export const User = mongoose.model("User", userSchema);