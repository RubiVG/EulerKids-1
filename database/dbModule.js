const app = require("express")();
const MongoClient = require("mongodb").MongoClient;
const url = require("../database/url");
let connection = null;

module.exports.connect = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(
      url.database.url,
      {
        useNewUrlParser: true,
        poolSize: 10
      }
    )
      .catch(err => {
        console.error("dbModule.js ->", err);
        reject(err);
      })
      .then(db => {
        resolve(db);
        const Database = env => {
          if (env === "development") {
            return db.db(process.env.DEV_DB);
          }

          if (env === "production") {
            return db.db(process.env.PRODUCTION_DB);
          }
        };
        connection = Database(app.get("env"));
        console.log("Database = ", connection.s.databaseName);
      });
  });

module.exports.get = () => {
  if (!connection) {
    throw new Error("Call connect first!");
  }

  return connection;
};
