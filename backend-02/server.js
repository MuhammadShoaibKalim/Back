require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is an empty response..!!");
});

app.get("/jokes", (req, res) => {
    const jokes =[
        { id: 1, joke: "Why did the chicken cross the road? To get to the other side." },
        { id: 2, joke: "What do you call a bear with no arms? A bear without a jaw." },
        { id: 3, joke: "Why did the scarecrow win an award? Because he was outstanding in his field." },
         // Add more jokes here...
         { id: 4, joke: "Why did the tomato turn red? Because it saw the salad dressing." },
         { id: 5, joke: "What did the cookie say when it got stuck in the oven? 'I'm going to make a sandwich.'" }
    ]
    res.send(jokes);
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`ShaibiCode and Solution is running on ${PORT}`);
});
