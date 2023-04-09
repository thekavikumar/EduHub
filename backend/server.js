const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mon = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const colors = require("colors");

const app = express();

dotenv.config();

const url = process.env.MONGO_URI;

const port = 5000;

MongoClient.connect(url)
  .then((client) => {
    console.log("connected to mongodb server");

    const db = client.db("eduhub");
    const posts = db.collection("posts");

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
      res.send("database conected!".red);
    });

    app.post("/posts", (req, res) => {
      posts
        .insertOne(req.body)
        .then((result) => {
          res.status(201).json({
            success: true,
            data: result,
          });
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        });
    });

    app.post("/like", (req, res) => {
      const { id, like } = req.body;
      posts
        .updateOne({ _id: new mon.ObjectId(id) }, { $inc: { likes: 1 } })
        .then((result) => {
          res.status(201).json({
            success: true,
            data: result,
          });
        });
    });
    app.post("/dislike", (req, res) => {
      const { id, dislike } = req.body;
      posts
        .updateOne({ _id: new mon.ObjectId(id) }, { $inc: { likes: -1 } })
        .then((result) => {
          res.status(201).json({
            success: true,
            data: result,
          });
        });
    });

    app.get("/posts", (req, res) => {
      posts
        .find({})
        .toArray()
        .then((result) => {
          res.status(200).json({
            success: true,
            data: result,
          });
        });
    });
    app.delete("/posts", (req, res) => {
      posts
        .deleteOne({ name: req.body.name })
        .then((result) => {
          res.status(200).json({
            success: true,
          });
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        });
    });

    app.listen(port, () => console.log("listening on port " + port));
  })
  .catch(console.error);
