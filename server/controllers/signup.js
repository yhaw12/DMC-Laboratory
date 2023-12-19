const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// SignUp User to the Database
router.post('/signup', async (req, res)=>{

    // first check the user first exit
    const checkData = 'SELECT * FROM account WHERE email = ?';
    const {email} = req.body;

    const now = Date().now
    
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

module.exports =router