import connectdb from './db/index.js';
import express from "express";
const PORT = process.env.PORT || 6000;

 connectdb()
 .then( ()=>{
    console.log(`The server is running on port : ${PORT}`)
 })
 .catch( (error) =>{
    console.log(`Error in mongodb`)
 })

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");

        app.use(express.json());  // Example: Setup middleware

        app.on("error", (error) => {
            console.error("Server error:", error);
        });

        app.listen(PORT, () => {
            console.log(`The app is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("The error occurs:", error);
    }
})();
*/