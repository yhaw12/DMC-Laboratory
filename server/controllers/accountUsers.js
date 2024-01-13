 const express = require('express')
const upload = require('../components/fileUpload') /// this is a component with the code for multer
const router = express.Router()
const db = require('../models/databaseModels')
const session = require('express-session')


router.post('/users/:id', upload.single('image'), (req,res) =>{
  const sql = `INSERT INTO staff (name, email, phone, address, image) VALUES (?, ?, ?, ?, ?)`;

    const values = req.body
    const {name, phone, email, address} = values;
    const image = req.file ? req.file.path : null;
   

    db.query(sql, [ name, email,phone,address, image], (err, results)=>{
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
  const sql = 'SELECT * FROM staff WHERE id = ?';
  const id = req.params.id;

  db.query(sql, id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({Status: 'Error in fetching data', Error: err});
    }
    if (results.length > 0) {
      console.log(results[0])
      return res.json(results[0]); 
      
    } else {
      return res.status(404).json({Status: 'User not found'});
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

