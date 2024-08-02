import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default:0
  },

  stcok: {
    type:Number,
     default:0
  },
  category: {
    type: mongoose.Schema.types.ObjectId,
    ref: "category",
    required: true
  },
  image: {
      type:String,
      required:true 
  },
  owner:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"user",
  }
}, {timestamps:true});

export const Product = mongoose.model("Product", productSchema);