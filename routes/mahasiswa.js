const express = require('express');
const router = express.Router();
const database = require('../config/database')


router.get('/', (req, res) => {
    var query = "select * from mahasiswa";
database.query(query,(err,rows)=>{
    if (!err) {
        return res.status(200).json(rows)
    }
})
});

router.get('/jadwal', (req, res) => {
    var query = "select * from jadwal";
database.query(query,(err,rows)=>{
    if (!err) {
        return res.status(200).json(rows)
    }
})
});

router.get('/scores', (req, res) => {
    var query = "select * from nilai";
database.query(query,(err,rows)=>{
    if (!err) {
        return res.status(200).json(rows)
    }
})
});

module.exports = router;