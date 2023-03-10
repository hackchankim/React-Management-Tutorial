const fs = require('fs');
const { required } = require("nodemon/lib/config");

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const port = process.env.PORT || 5000; 

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const { connect } = require('http2');

const connection = mysql.createConnection({
    host: conf.host, 
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const { Console } = require('console');
const upload = multer({dest:'./upload'})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true})); 

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM cst_mng.customer", 
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
    let image = '/image/' + req.file.filename; 
    let name = req.body.name; 
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;

    // log
    // console.log(image);
    // console.log(name);
    // console.log(birthday);
    // console.log(gender);
    // console.log(job);

    let params = [image, name, birthday, gender, job];
    connection.query(sql, params, 
        (err, rows, field) => {
            res.send(rows);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 
