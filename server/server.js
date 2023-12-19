const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const db = require('./models/databaseModels')

// ROUTES
const signup = require('./controllers/signup')
const login = require('./controllers/login') 
const accountUsers = require('./controllers/accountUsers')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST',
    credentials: true
}));
app.use(express.json())


app.use(signup)
app.use(login)
app.use(accountUsers)


app.get('/', (req, res)=>{
    console.log('backend connected');
    return res.json({message: 'backend connected'})
})

app.listen(8081, ()=>{
    console.log('Server Connected')
})


