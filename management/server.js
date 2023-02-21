const { required } = require("nodemon/lib/config");

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true})); 

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/any',
          'name':'티모시',
          'birthday':'210104',
          'gender':'남자',
          'job':'회사원'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/any',
          'name':'홍길동',
          'birthday':'210104',
          'gender':'남자',
          'job':'회사원'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/any',
          'name':'김티모',
          'birthday':'210104',
          'gender':'남자',
          'job':'회사원'
        }
        ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`)); 
