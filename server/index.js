const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://thepriyansukumar:sAD4NpTCKPWZNaL4@cluster0.f42s2pa.mongodb.net/pcourses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "pcourses" });

app.listen(3000, () => console.log('Server running on port 3000'));
