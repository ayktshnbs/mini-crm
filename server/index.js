require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const leadsRouter = require("./routes/leads");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mini CRM API çalışıyor 🚀");
});

app.use("/leads", leadsRouter);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is missing ❌");
  process.exit(1);
  }
    await 
     mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected ✅");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });
  } catch (err) {
    console.error("MongoDB connection error ❌", err);
    process.exit(1);
  }
}

start();