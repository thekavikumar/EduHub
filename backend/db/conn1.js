const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const uri = process.env.ATLAS_URI;
// Connection URL

// Database Name
const dbName = "eduhub";

// Use connect method to connect to the server
MongoClient.connect(uri, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
