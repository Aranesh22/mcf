const express = require('express');
const app = express();
const mc = require('mongodb').MongoClient;
const aboutUs = require('./routes/aboutUs');
const index = require('./routes/index');
const coaches = require('./coaches.json');
const { google } = require("googleapis");
let db;

app.use('/aboutUs',aboutUs);
app.use('/',index);

//Body parsers
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/whoweare',function(req,res) {
    res.sendFile('./dummyPages/whoWeAre.html',{root:__dirname});
});

app.post('/questions',function(req,res) {
    let tracker = {'Zhongli':0, 'Razor':0, 'Yanfei':0};
    console.log(req.body);

    question_1(req.body.preferred_gender,tracker);
    question_2(req.body.group_nutrion,tracker);
    console.log(greatest(tracker));

    res.redirect('/');
});

function question_1(answer, tracker) {
    if (answer == 'Male') {
        tracker['Zhongli'] += 1;
        tracker['Razor'] += 1;
    }else if (answer == 'Female') {
        tracker['Yanfei'] += 1;
    }
}

function question_2(answer, tracker) {
    if (answer == 'group_only') {
        tracker['Zhongli'] += 1;
    }else if (answer == 'nutrion_only') {
        tracker['Razor'] += 1;
    }else if (answer == 'Neither') {
        tracker['Yanfei'] += 1;
    }else {
        tracker['Zhongli'] += 1;
        tracker['Razor'] += 1;   
    }
}

function greatest(tracker) {
    let greatest = -1;
    let keys = Object.keys(tracker);
    for (let i = 0; i < keys.length; ++i) {
        if (tracker[keys[i]] > greatest) {
            greatest = tracker[keys[i]];
        }
    }
    
    let coaches = [];
    for (let i = 0; i < keys.length; ++i) {
        if (tracker[keys[i]] == greatest) {
            coaches.push(keys[i]);
        }
    }
    if (coaches.length > 1) {
        let random = Math.floor(Math.random() * coaches.length);
        return coaches[random];
    }else {
        return coaches[0];
    }
}

/*
mc.connect("mongodb://localhost:27017",function(err,client) {
    if (err) {
        console.log("Error connecting to database.");
        //console.log(err);
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
*/
app.listen(5000);
console.log('Server is listening at http://localhost:5000');