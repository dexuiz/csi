var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://dexuiz:deval@ds151433.mlab.com:51433/csi");

app.listen(port,function(){
  console.log("csi server on 3000");
})
