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

app.get("/players", async (req, res) => {
  const player = await Player.find().exec();
  res.json(player);
});

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(`nationalteam API is listen on ${port}`);
  });
});
