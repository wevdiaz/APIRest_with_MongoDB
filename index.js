const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
require("dotenv").config();


app.use( express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(`mongodb+srv://wevdiazz:${process.env.CONNECTIONDB}@clusterdb.p4ohbir.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Conectamos ao banco MongoDB");

    app.listen(3000, () => {
      console.log("http://localhost:3000");
      console.log("Server is running!");
    });

  })
  .catch((err) => console.log(err));

