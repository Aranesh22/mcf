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

app.post('/question/:quesNum',(req,res) => {
    console.log(req.body);

    let questionNumber = parseInt(req.params.quesNum);

    if (questionNumber == 12) {
        if (checkEmail(req.body.email) == 0) {
            return res.status(400).send({
                message: "Email was not entered properly!"
            });
        }
        sendEmail(req.body.email);
        //updateDoc(req.body.answer);
        res.redirect('/');
        return;
    }

    questionNumber += 1;
    
    let newPath = "/quiz/question_" + String(questionNumber);
    //updateDoc(req.body.answer);
    res.redirect(newPath);
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

function updateDoc(ans) {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
      // Create client instance for auth
      const client = await auth.getClient();
    
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });
      const spreadsheetId = "1KLhPxPibw0hN5fKMZxdyEqzf5UsPXV0N7pChMzPIuVg";
    
      // Write row(s) to spreadsheet
      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[ans]],
        },
      });
    
     console.log("Google doc successfully submitted!");
}
