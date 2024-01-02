const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const session = require('express-session')
const db = require('../models/databaseModels')


router.post('/login', async(req, res)=>{
    const sql = 'SELECT * FROM account WHERE name = ?';

    const {name, password} = req.body;

    db.query(sql, [name], async(err, results)=>{
        if (err){
            return res.json({Error: 'User does not Exist'});
        }
        if (results.length > 0){
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch){
                const secretKey = process.env.JWT_SECRET 
                const token = jwt.sign({id: user.id}, secretKey, {expiresIn: '1d'})
                res.cookie('token', token , {httpOnly:true})
                req.session.user ={
                    id : user.id,
                    name: user.name 
                };

                // Check if the user has already logged in today
                const today = new Date();
                today.setHours(0, 0, 0, 0);  // Set the time to 00:00:00
                const lastLogin = new Date(user.last_login);
                lastLogin.setHours(0, 0, 0, 0);  // Set the time to 00:00:00

                if (today.getTime() !== lastLogin.getTime()) {
                    // The user has not logged in today, so update the login time
                    const sqlUpdate = 'UPDATE account SET last_login = ? WHERE id = ?';
                    db.query(sqlUpdate, [new Date(), user.id], (err, result) => {
                        if (err) {
                            console.log('Error updating login time');
                        }
                    });
                }
                return res.json({Status: 'Success', token: token, user: req.session.user});
            } else {
                return res.json({Status: 'Failure', Error: 'Incorrect password'});
            }
        } else {
            return res.json({Status: 'Failure', Error: 'User not found'});
        }
    })
})


// Get login User name
router.get('/login', (req, res)=>{
    if (req.session.user) {
        const sql = 'SELECT * FROM account WHERE id = ?';
        const id = req.session.user.id;

        db.query(sql, [id], (err, results)=>{
            if (err){
                console.log('Error in getting Lab User Name')
            }else{
                res.json({Status: 'Success', name: results[0].name, email: results[0].email})
            }
        })
    } else {
        // handle the situation when user is not defined, maybe redirect to login page
        res.json({Status: 'Failure', Error: 'User not logged in'});
    }
})

router.get('/login/:id', (req, res)=>{
    const sql = 'SELECT * FROM account WHERE id = ?';
    const id = req.params.id;

    db.query(sql, [id], (err, results)=>{
        if (err){
            console.log('Error in getting Lab User Name')
        } else if (results.length > 0) {
            res.json({Status: 'Success', name: results[0].name, email: results[0].email})
        } else {
            res.json({Status: 'Failure', Error: 'User not found'});
        }
    })
})

module.exports = router;