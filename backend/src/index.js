const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use('/', router);

const db = mongoose.connect('mongodb+srv://BVenkataiah:Venky18@cluster0.tojee2p.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("connected to Database"))
            .catch((err) => console.log(err));

app.listen(5000, () => console.log('Server running......'));
