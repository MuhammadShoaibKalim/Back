import dotenv from 'dotenv';
import express from 'express';
import connectdb from './db/index.js';


dotenv.config({
    path:"../.env"
});

const app = express();
const PORT = process.env.PORT || 4000;

 connectdb();

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