const express = require('express')
const upload = require('../components/fileUpload') /// this is a component with the code for multer
const router = express.Router()
const db = require('../models/databaseModels')


router.post('/users', upload.single('file'), (req,res) =>{
    const sql = `INSERT INTO users (name, phone, email, image, address) VALUES(?,?,?,?,?)`

    const values = req.body
    const {name, phone, email, address} = values;
    const file = req.file.path;
    

    db.query(sql, [name, phone, email, file, address], (err, response)=>{
        if(err){
            return res.json({Status : 'Error in Submitting data', Error: err})
            console.log(err)
        }
        if (response){
            return res.json({Status: 'Success', })
        }
    })


})

module.exports = router;