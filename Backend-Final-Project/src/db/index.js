import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb is connected.");
    } catch (error) {
        console.error("Here is an error", error);
        process.exit(1);
    }
};

export default connectdb;
