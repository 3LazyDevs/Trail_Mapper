const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT=3000;

app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
app.get('/destinations', (req, res)=>{
    res.sendFile(__dirname + "/views/Cards.html");
});
app.get('/landing', (req, res)=>{
    res.sendFile(__dirname + "/views/middle_page.html");
});



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
