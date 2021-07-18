const express = require('express');
const app = express();
const mc = require('mongodb').MongoClient;
const aboutUs = require('./routes/aboutUs');
const index = require('./routes/index');
const coaches = require('./coaches.json');
const questions = require('./questions.json');
const { google } = require("googleapis");
const nodemailer = require('nodemailer');

let db;

app.use('/aboutUs',aboutUs);
app.use('/',index);

//Body parsers
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/whoweare',function(req,res) {
    res.sendFile('./dummyPages/whoWeAre.html',{root:__dirname});
});

app.post('/question_1', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_2');
});

app.post('/question_2', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_3');
});

app.post('/question_3', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_4');
});

app.post('/question_4', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_5');
});

app.post('/question_5', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_6');
});

app.post('/question_6', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_7');
});

app.post('/question_7', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_8');
});

app.post('/question_8', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_9');
});

app.post('/question_9', (req, res) => {
    console.log(req.body);
    res.redirect('/quiz/question_10');
});

app.post('/question_10', (req, res) => {
    console.log(req.body);
    
    if (checkEmail(req.body.email) == 0) {
        return res.status(400).send({
            message: "Email was not entered properly!"
        });
    }
    
    sendEmail(req.body.email);

    res.redirect('/');
});

app.get('/sendQuestions', (req, res) => {
    let newQuestions = {};
    let someQuestions = [];
    for (let i = 0; i < questions.length; ++i) {
        newQuestions[i] = questions[i];
        someQuestions.push(questions[i]);
    }
    //res.json(newQuestions);
    res.send(someQuestions);
});

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

function checkEmail(email) {
    //can add aol, outlook and other services
    let gmail = email.slice(-10);
    
    if (String(gmail) === '@gmail.com') {
        return 1;
    }

    return 0;
}

function sendEmail(email) {
    /*
    User: fitnessautomail@gmail.com
    Pass: verycooljames 
    */

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fitnessautomail@gmail.com',
            pass: 'verycooljames'
        }
    });
    
    var mailOptions = {
        from: 'fitnessautomail@gmail.com',
        to: String(email),
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }else {
            console.log('Email sent: ' + info.response);
        }
    });
}