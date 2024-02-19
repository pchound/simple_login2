const express = require("express");
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', // Use localhost or 127.0.0.1 as the hostname
    port: '3307',      // Specify the port number
    user: 'root',
    password: 'password',
    database: 'crud_database',
});

app.get("/movieReviews", (req, res) => {
    db.query("SELECT * FROM movie_reviews", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});