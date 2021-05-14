const express = require('express');
const app = express();
const mc = require('mongodb').MongoClient;
let db;

//Body parsers
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res) {
    res.send("Home Page.");
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
 
    app.listen(3000);
    console.log('Server is listening at http://localhost:3000');
});