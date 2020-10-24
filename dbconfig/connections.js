'use strict';

const mysql = require('mysql');
//------------------------------
var db;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    db = mysql.createConnection(process.env.JAWSDB_URL);
    db.connect((err)=>{
      if(!err){
        console.log('connected to jawsdb mysql.');
      }else{
        throw err;
      };
    });
} else {
    // Database is local
    const db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.MYSQL_DB,
      password: process.env.DB_PASS,
      multistatement: true
    });

    db.connect((err)=>{
      if(!err){
        console.log('connected to mysql.');
      }else{
        throw err;
      };
    });
  };

module.exports = db;
