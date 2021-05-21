const express = require('express');
let router = express.Router();

router.get('/',function(req,res) {
    res.sendFile('/dummyPages/aboutUs.html',{root:'../server'});
    //res.send("hi get /aboutUs.");
});

router.get('/meetTheTeam',function(req,res) {
    res.sendFile('/dummyPages/meetTheTeam.html',{root:'../server'});
    //res.send("hi get /aboutUs/meetTheTeam.");
});

module.exports = router;