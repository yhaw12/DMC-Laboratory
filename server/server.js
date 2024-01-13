const express = require('express');
const cors = require('cors');
const db = require('./models/databaseModels')
const session = require('express-session')
require('dotenv').config();

// ROUTES
const signup = require('./controllers/signup')
const login = require('./controllers/login')
const accountUsers = require('./controllers/accountUsers')
const logout = require('./controllers/logout')
const reset = require('./controllers/resetpassword')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST', 
    credentials: true
}));

secretKey = process.env.JWT_SECRET 
app.use(
    session({
      secret: secretKey,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
        },
        rolling: true
    })
  )
  

app.use(express.json());

app.use(signup)
app.use(login)
app.use(logout)
app.use(accountUsers)
app.use(reset)

app.get('/', (req, res) =>{
    if (req.session.user && req.session.user.id){
        const id = req.session.user.id;
        res.send(`Welcome, ${req.session.user.name}! Your ID is ${id}`);
    } else{
        res.send('Please log in!');
    }
});

// app.get('/', (req, res)=>{
//     console.log('backend connected');
//     return res.json({message: 'backend connected'})
// })

app.listen(8081, ()=>{
    console.log('Server Connected')
})


