/*const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

app.post("/api/eduhub/post", (req, res) => {
  const { title, image, content, likes, comments, shares } = req.body;
  const db = dbo.getDb("eduhub");
  db.collection("posts").insertOne(
    { title, image, content, likes, comments, shares },
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send();
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/eduhub/get", (req, res) => {
  const db = dbo.getDb("eduhub");
  db.collection("posts")
    .findOne({})
    .toArray((err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.json(result);
      }
    });
});
*/
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
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

    app.put("/posts", (req, res) => {
      posts
        .findOneAndUpdate(
          { name: req.body.name },
          {
            $set: {
              duration: req.body.duration,
            },
          },
          { upsert: true }
        )
        .then((result) => {
          res.status(200).json({
            success: true,
            data: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: err.message,
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
