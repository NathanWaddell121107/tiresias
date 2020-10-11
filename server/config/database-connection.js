require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
dotenv.config()

let mongoDB;

const setupDB = callback => {
  const uri = process.env.DATABASE_CONNECTION_STRING

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('tiresias');

      if (err) {
        return callback(err);
      } else {
        return callback('DB Connected successfully');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };