// for connecting to db and establishing server connection

const app = require('./app')
const mongoose = require("mongoose");
let port = process.env.PORT || 3000
require('dotenv/config');

const db = mongoose.connect('mongodb+srv://BVenkataiah:Venky18@cluster0.tojee2p.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("connected to Database"))
            .catch((err) => console.log(err));

app.listen(port, () => console.log('Server running......'));
