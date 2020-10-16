"use strict";
const db = require('../dbconfig/connections');
const express = require('express');
const router = express.Router();
//-------------------------------------------
router.get('/comments', (req, res)=>{
  res.render('tossfeatures/comments',{
    title:"GlobalFriend | user comments"
  });
});
router.get('/events', (req, res)=>{
  res.render('tossfeatures/events',{
    title:"GlobalFriend | user suggested events"
  });
});
router.get('/deals', (req, res)=>{
  res.render('tossfeatures/deals', {
    title: "GlobalFriend | user suggested deals"
  });
});
router.get('/travelCompanions', (req, res)=>{
  res.render('tossfeatures/travelCompanions', {
    title: "GlobalFriend | find travel companions"
  });
});




module.exports = router;
