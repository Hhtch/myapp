const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose(); 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('app', { title: 'Input some info' });
}   
);

router.post('/drow', function(req, res, next) {
  let db = new sqlite3.Database('./Base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
      console.log('Connected to the Base database.');
    });
  let sql =  `SELECT UserID as id,
              Name as name,
              Age as age,
              City as city
            FROM First`
  let data = []; 
 
  db.all(sql, [], (err, rows) => {
    if (err){
      console.error(err.message); 
    }
    rows.forEach((row) => {      
      newdata = data.push ({"Id": row.id, "Name" : row.name, "Age": row.age, "City" : row.city,});    
    })   
    res.json(data);
    
  });
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });

  
} 
);

router.post('/addpost', function(req, res, next) {  
   let db = new sqlite3.Database('./base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
      console.log('Connected to the Base database.');
    });
   
  db.serialize(() => {
    if (err) {
      console.error(err.message);
    }

    db.each(`    
              INSERT INTO First (Name, Age, City)
                VALUES
                  ("${req.body.Name}", ${req.body.Age}, "${req.body.City}" );
            `)
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });                                   
  res.sendStatus( 200 );
}   
);

module.exports = router;