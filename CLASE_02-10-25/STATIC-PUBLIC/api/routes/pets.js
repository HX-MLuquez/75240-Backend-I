const express = require('express');
const router = express.Router();

const pets = [];

router.post('/', (req, res) => {
   console.log(req.body);
   return res.send("holis")
});


router.get('/all', (req, res) => {
    
});

module.exports = router;
