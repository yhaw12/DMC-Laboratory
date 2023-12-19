const express = require('express');
const mysql = require('mysql');

// Connect to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dmc_website'
});

// Check database Connection
db.connect((err)=>{
    if (err){
        console.log('Error Connecting to database')
    }
    else{
        console.log('Success Connecting to database')
    }
});

// db.end((error) => {
//     if (error) throw error;
//     console.log('Connection closed');
//   });

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone INT(50),
    address VARCHAR(250),
    image VARCHAR(255)
  )`;

  db.query(sqlCreateTable, (error, results) => {
    if (error) throw error;
    console.log('Users table created');
  });

module.exports = db;