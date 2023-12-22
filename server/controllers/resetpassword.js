const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const db = require('../models/databaseModels');


router.put("/reset/:id", async(req, res)=>{
    const {id} = req.params
    const {password} = req.body

    const hashPassword = await bcrypt.hash(password, 10)
    const sql = 'UPDATE account SET  password = ?' 

    db.query(sql, [hashPassword, id], (err, results) => {
        if (err) {
          return res.json({ Status: 'Failure', Error: err });
        }
        res.json({ Status: 'Success', Message: 'Password has been reset.' });
    });
})

module.exports = router;