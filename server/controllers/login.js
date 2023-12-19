const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/login', async(req, res)=>{
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

module.exports = router