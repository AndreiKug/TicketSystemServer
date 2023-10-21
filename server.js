const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));


app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});  

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("Server is running");
})