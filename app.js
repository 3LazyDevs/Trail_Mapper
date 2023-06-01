const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT=3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.render('Landing');
});
app.get('/landing', (req, res)=>{
    res.render('Cards')
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});