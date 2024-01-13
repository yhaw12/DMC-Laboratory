const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toString().replace(/:/g, '-') + file.originalname)
    }
})

const upload = multer({storage: storage})


  // file uploads file path
  const fs = require('fs');
  const path = require('path');
  
  const dirPath = path.join(__dirname, '/uploads');
  
  if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
  }
  
module.exports = upload