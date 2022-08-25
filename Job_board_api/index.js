const express = require('express');  
const app = require('express')(); 
var bodyParser = require('body-parser')
var routes=require('./routes/approutes');
var cors = require('cors')
const path = require ('path');
const moment = require('moment');
var multer= require('multer')
var sql = require('./models/db.js');
var {v4:uuidv4}=require('uuid')
// app.configure(function(){
//   app.use(express.bodyParser());
// });
app.use(express.static('picture'));
app.use(express.static('Resume'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
routes(app);
const IMAGEDIR = path.join(__dirname, 'Picture');


const storage_image = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("vvvvvvv");
    cb(null, IMAGEDIR);
  },
  filename: (req, file, cb) => {
    console.log("vvvvvvv");
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});



var uploadImage = multer({
  storage: storage_image,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});



app.post('/post-image', uploadImage.single('postImage'), async (req, res, next) => {
  console.log('===================');
  console.log("RESPONSE",res)
  console.log(req);
  console.log('===================');
  const url = req.protocol + '://' + req.get('host');
  
  res.status(201).json({ "Flag":"1","message": "saved", "url": req.file.filename }); 
})

const RESUMEDIR = path.join(__dirname, 'Resume');

const storage_resume = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("vvvvvvv");
    cb(null, RESUMEDIR);
  },
  filename: (req, file, cb) => {
    console.log("vvvvvvv");
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});

var uploadresume = multer({
  storage: storage_resume,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});

app.post('/post-resume', uploadresume.single('postresume'), async (req, res, next) => {
  console.log('===================');
  console.log("RESPONSE",res)
  console.log(req);
  console.log('===================');
  const url = req.protocol + '://' + req.get('host');
  if(req.file.filename != undefined){
  res.status(201).json({ "Flag":"1","message": "saved", "url": req.file.filename }); 
  }
  
})

var server = app.listen(8000, function () {  
 
var host = server.address().address
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  
