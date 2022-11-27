const express = require('express');
const app = express();
const cors = require('cors');
const index = require('../routes/home')
const mahasiswa = require('../routes/mahasiswa')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',index);
app.use('/mahasiswa',mahasiswa);

module.exports = app;