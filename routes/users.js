"use strict";
const db = require('../dbconfig/connections');
const express = require('express');
const router = express.Router();
//-------------------------------------------
router.get('/signIn', (req, res)=>{
  res.render('auth/signIn',{
    title:"Welcome to GlobalFriend"
  });
});
router.get('/signUp', (req, res)=>{
  res.render('auth/signUp', {
    title: "sign up.."
  });
});




module.exports = router;
