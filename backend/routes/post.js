const express = require("express");
const postRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

postRoutes.route("/post/get").get(function (req, res) {
  let db_connect = dbo.getDb("eduhub");
  db_connect
    .collection("posts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

postRoutes.route("/post/add").post(function (req, res) {
  let db_connect = dbo.getDb("eduhub");
  let myobj = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    likes: req.body.likes,
    comments: req.body.comments,
    shares: req.body.shares,
  };
  db_connect.collection("posts").insertOne(myobj, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

postRoutes.route("/post/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("eduhub");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      title: req.body.title,
      image: req.body.image,
      content: req.body.content,
      likes: req.body.likes,
      comments: req.body.comments,
      shares: req.body.shares,
    },
  };
  db_connect
    .collection("posts")
    .updateOne(myquery, newvalues, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

postRoutes.route("/post/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("eduhub");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("posts").deleteOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = postRoutes;
