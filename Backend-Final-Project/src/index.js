import monsgoose from "mongoose";

(async ()=>{
    try {
        const connection = await monsgoose.connect("mongodb://localhost:27017/ecommerce");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        throw
         
    }
})()