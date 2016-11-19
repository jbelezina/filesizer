'use strict'

let express = require('express'),
    multer  = require('multer'),
    upload = multer({ dest: 'upload/' }),
    fs = require('fs'),
    portNo = 8080 || process.env.PORT;
    
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
})

app.post('/upload', upload.single('uploadedfile'), function (req, res, next) {
  
    let file = req.file;
    let size = file.size;
    
     res.json({
        'size': size
    })
});

app.listen(portNo, ()=>{console.log('server runnin on port' + portNo)});