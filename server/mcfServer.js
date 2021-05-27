const express = require('express');
const app = express();
const mc = require('mongodb').MongoClient;
const aboutUs = require('./routes/aboutUs');
const index = require('./routes/index');
let db;

app.use('/aboutUs',aboutUs);
app.use('/',index);

//Body parsers
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/whoweare',function(req,res) {
    res.sendFile('./dummyPages/whoWeAre.html',{root:__dirname});
});

mc.connect("mongodb://localhost:27017",function(err,client) {
    if (err) {
        console.log("Error connecting to database.");
        console.log(err);
        return;
    }

    db = client.db("testdb");

    db.collection("test").insertOne({key1:1, key2:2}, function(err,result) {
        if (err) throw err;
        console.log(result);
    });
 
    app.listen(5000);
    console.log('Server is listening at http://localhost:5000');
});

/*
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Server says best anime is Steins;Gate." });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
*/