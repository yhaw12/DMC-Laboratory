const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST',
    credentials: true
}));
app.use(express.json())

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


// SignUp User to the Database
app.post('/signup', async (req, res)=>{

    // first check the user first exit
    const checkData = 'SELECT * FROM account WHERE email = ?';
    const {email} = req.body;
    db.query(checkData, [email], async(err, results)=>{
        if (results.length > 0){
            return res.json({Status: 'User Already Exist'})
        }else{

            // signup users
            const sql = 'INSERT INTO account (`name`,`email`, `password`) VALUES(?,?,?) ';
            const {name, email, password} = req.body;


            // hash password
            const hashPassword =  await bcrypt.hash(password, 10);

            // database query
            const values = [name, email, hashPassword];
            db.query(sql, values, (err, results)=>{
                if (err){
                    console.log(err)
                    return res.json({Status: 'Error Signing Up', Error: err})
                }
                if (results){
                    console.log('Success Signup User')
                    return res.json({Status: 'Success'})
                }
            })
        }
    })

});


// login
app.post('/login', async(req, res)=>{
    const sql = 'SELECT * FROM account WHERE `name` = ?';

    const {name, password} = req.body;

    db.query(sql, [name], async(err, response)=>{
        if (err){
            return res.json({message: 'User does not Exist', Error: err});
        }
        if (response.length > 0){
            return res.json({Status: 'Success'});
        }
       //compare hashed password 
        const user = response[0];
        const hashedPassword = await bcrypt.compare(password, user.password);

        if (hashedPassword){
            
            const token = jwt.sign({userId: user.id}, 'SECRET-KEY', {expiresIn: '1d'})
            res.cookie('token', token , {httpOnly:true})
            return res.json({Status: 'Success'});
        }
    })
})

app.get('/', (req, res)=>{
    console.log('backend connected');
    return res.json({message: 'backend connected'})
})


app.listen(8081, ()=>{
    console.log('Server Connected')
})