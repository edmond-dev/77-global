"use strict";
const db = require('../dbconfig/connections');
const express = require('express');
const router = express.Router();
//-------------------------------------------
router.get('/comments', (req, res)=>{
  res.render('products/comments',{
    title:"GlobalFriend | user comments"
  });
});
router.get('/Suggestions', (req, res)=>{
  res.render('products/Suggestions', {
    title: "sign up.."
  });
});




module.exports = router;
