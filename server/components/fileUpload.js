const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb:{null, './uploads/'}
    },
    filename: function(req, res, cb){
        cb(null, new Date.now().toISOString() + file.originalname)
    }
})

const upload = multer({storage: storage})

module.exports = upload