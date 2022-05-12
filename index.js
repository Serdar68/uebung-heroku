import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const port = process.env.PORT;
const app = express();
app.use(cors());

const playerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  club: String,
  position: String,
  yearOfBirth: Number,
});
const Player = mongoose.model("Player", playerSchema, "players");

app.use("/players", (req, res) => {
  res.json({ msg: "hallo" });
});

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(`nationalteam API is listen on ${port}`);
  });
});
