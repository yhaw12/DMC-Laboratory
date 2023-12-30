 const express = require('express')
const upload = require('../components/fileUpload') /// this is a component with the code for multer
const router = express.Router()
const db = require('../models/databaseModels')
const session = require('express-session')


router.put('/users/:id', upload.single('image'), (req,res) =>{
  const sql = `UPDATE staff SET name = ?, email = ?, phone = ?, address = ?, image = ? WHERE id = ?`;

    const values = req.body
    const {name, phone, email, address} = values;
    const image = req.file ? req.file.path : null;

    db.query(sql, [name, email,phone,address, image], (err, results)=>{
        if(err){
            console.log(err)
            return res.json({Status : 'Error in Submitting data', Error: err})
        }
        if (results){
            return res.json({Status: 'Success', })
        }
    })
})


// Get data from the database and pass to the frontend for the profile
router.get('/users/:id', (req, res) => {
  const id = req.params.id;

  // First, try looking up the user in the "account" table
  const sql = `SELECT * FROM account WHERE id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.json({ Status: 'Error getting data' });
    }
    
    if (results.length > 0) {
      return res.json({ Status: 'Success', Data: results[0] });
    } else {
      // If no data exists in the "account" table, try looking up the user in the "staff" table instead
      const sql = `SELECT * FROM staff WHERE id = ?`;
      db.query(sql, [id], (err, results) => {
        if (err) {
          return res.json({ Status: 'Error getting data' });
        }
        
        if (results.length > 0) {
          return res.json({ Status: 'Success', Data: results[0] });
        } else {
          return res.json({ Status: 'Error', Message: 'No such user found.' });
        }
      });
    }
  });
});
  



//   pathology
router.post('/pathology', (req, res) => {
    const clientData = req.body;
    // Insert the data into the database.
    db.query('INSERT INTO your_table SET ?', clientData, (error, results) => {
      if (error) throw error;
      res.status(200).end();
    });
  });

router.get('/pathology', (req, res)=>{
    try{
      const [clients] = db.query('SELECT * FROM pathology');
      const total = clients.length;
      res.json({clients, total});
    }  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
})
  
 
module.exports = router;

