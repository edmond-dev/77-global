"use strict";
const db = require('../dbconfig/connections');
const express = require('express');
const router = express.Router();
//-------------------------------------------
router.get('/', (req, res)=>{
  res.render('home',{
    title:"GlobalFriend | Home"
  });
});

router.get('/main', (req, res) => {
  res.render('main',{
    title: "GlobalFriend | main"
  });
});

router.get('/mainInfo', (req, res) => {
  res.render('mainInfo',{
    title: "GlobalFriend | Toss request viewing"
  });
});

router.get('/tossReq', (req, res) => {
  res.render('tossReq',{
    title: "GlobalFriend | Toss request"
  });
});




module.exports = router;
