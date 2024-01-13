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
const sqlMainTable = `CREATE TABLE IF NOT EXISTS account (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  last_login TIMESTAMP  
)`;

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone INT(50),
    address VARCHAR(250),
    image VARCHAR(255)
  )`;
  
  const sqlPathTable = `CREATE TABLE IF NOT EXISTS pathology (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age VARCHAR(100), 
    sex VARCHAR(100),
    date DATE,
    specificGravity FLOAT(20),
    blood VARCHAR(100),
    protein VARCHAR(100),
    glucose VARCHAR(100),
    bilirubin VARCHAR(100),
    urobilinogen VARCHAR(100),
    nitrites VARCHAR(100),
    leukocytes VARCHAR(100),
    epithelialCells VARCHAR(100),
    pusCells VARCHAR(100),
    rBCs VARCHAR(100)
  )`;

  db.query(sqlMainTable, (error, results)=>{
    if (error) throw error;
    console.log('Auth table created');
  })
  
  db.query(sqlCreateTable, (error, results) => {
    if (error) throw error;
    console.log('Users table created');
  });
  db.query(sqlPathTable, (error, results)=>{
    if (error) throw error;
    console.log('Patholgy table created');
  })



module.exports = db;