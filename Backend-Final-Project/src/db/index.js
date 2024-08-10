// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config({ path: "../.env" });

// const connectdb = async () => {
//     try { 
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//          console.log("Mongodb is connected.");
//     } catch (error) {
//          console.error("Here is an error", error);
//         process.exit(1);
//     }
// };

// export default connectdb; 





import mongoose from 'mongoose';

const connectdb = async () => {
    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error; // Re-throw the error to be caught in the .catch block
    }
};

export default connectdb;
