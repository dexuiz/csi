var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://dexuiz:deval@ds151433.mlab.com:51433/csi");

app.listen(3000||process.env.PORT,function(){
  console.log("csi server on 3000");
})
