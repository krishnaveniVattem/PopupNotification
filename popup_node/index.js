var firebase = require("firebase");
var bodyParser = require('body-parser')



var express = require('express')
var mysql = require('mysql')
var app =express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());  

var firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: "./serviceAccountKey.json",
    databaseURL: "https://popup-6c0a5.firebaseio.com/"
});

 var ref = firebase.database().ref('node-client');
 var Ref = ref.child('messages');
 


app.post('/message', function(req, res){
   console.log(req.body.id)
   var messagesRef = Ref.child(req.body.id);
   messagesRef.push({
     message:req.body.messages
 });
 
    res.send('succesfull')    
});

app.post('/reciever', function(req, res){
    console.log(req.body)
    
   var messagesRef = Ref.child(req.body.userid);
   messagesRef.push({
       message:"added"
   });
 
    res.send('succesfull meeting')    
});
app.listen(9000);