require("dotenv").config();
const express = require("express");
const app = express();

// Middleware to parse JSON bodies (if needed in the future)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is an empty response..!!");
});

app.get("/api/jokes", (req, res) => { // Match this route with the frontend request
  const jokes = [
    { id: 1, joke: "Why did the chicken cross the road? To get to the other side." },
    { id: 2, joke: "What do you call a bear with no arms? A bear without a jaw." },
    { id: 3, joke: "Why did the scarecrow win an award? Because he was outstanding in his field." },
    { id: 4, joke: "Why did the tomato turn red? Because it saw the salad dressing." },
    { id: 5, joke: "What did the cookie say when it got stuck in the oven? 'I'm going to make a sandwich.'" }
  ];
  res.json(jokes); // Send JSON response
});

// Use environment variable for PORT or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
