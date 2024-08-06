import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new Schema({
         username:{
            type:String,
            required:true,
            unique:true,
            lowercase: true,
            index:true, //searing purpose
            trim :true
         },
         email:{
            type:String,
            required:true,
            unique:true,
            lowercase: true,
            trim:true
         },
         FullName:{
            type:String,
            required:true,
            index:true,
            trim:true
         },
         avatar:{
            type:String, //cloudinary url
            required:true,
              
        },
        coverImage:{
            type:String //cloudinary url
        },
        watchHistroy:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password :{
            type:String,
            required:[true, "Password is required"]
        },
        refreshToken:{
            type:String
        }
},{timestamps:true});

userSchema.pre("save", async function  (next) {
    if(!this.isModified("password")) return next();
      this.password = bcrypt.hash(this.password, 10)
      next();
})

//we can add methods for our own methods which are not provided as like here:
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            FullName:this.FullName,
            username:this.username
        }
    )
}
userSchema.methods.generateRefreshToken = function (){}


export const User = mongoose.Schema("User", userSchema);
