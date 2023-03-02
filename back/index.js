const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

var path = require('path');

const port = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, ()=> {
    console.log('Conectado com a porta 5000');
})