import mongoose from "mongoose";

const  productsItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{timestamps:true});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productsItem :{
        type:[productsItemSchema],
        required: true
        },
    
    address: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    }
}, {timestamps:true})
export const Order = mongoose.model("Order", orderSchema);