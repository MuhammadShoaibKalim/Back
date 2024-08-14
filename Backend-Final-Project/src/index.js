// index.js
import express from 'express';
import 'dotenv/config';
// import connectdb from './db/index.js';
// import userRouter from './routes/user.router.js';

const app = express();
const PORT = process.env.PORT || 3601; // Changed port

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user router
app.use('/api/v1/users', userRouter);

// Function to start the server
async function startServer() {
    try {
        // Connect to MongoDB
        await connectdb();
        console.log('Connected to MongoDB');

        // Start the server
        app.listen(PORT, () => {
            console.log(`The server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code
    }
}

// Start the server
startServer();



//  connectdb()
//  .then( ()=>{
//     console.log(`The server is running on port : ${PORT}`)
//  })
//  .catch( (error) =>{
//     console.log(`Error in mongodb`)
//     exit(0);
//  })


     


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

