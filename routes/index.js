const express = require('express')
const router = express.Router();

// main page
router.get('/',(req,res) => res.render('welcome'));

// dashboard
router.get('/dashboard',(req,res) => res.render('dashboard'));



module.exports = router;