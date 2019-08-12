const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const bodyParser = require('body-parser');
const User = require('./models/User');
const passport = require('passport');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
        .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/tweets", tweets);


// app.get("/", (req, res) => {
//     res.send("something something darkside...")
// });
// app.listen(port, () => console.log(`Server is running on port ${port}`));

