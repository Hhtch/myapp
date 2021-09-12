const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();


router.get('/', function (req, res, next) {
  res.render('app', { title: 'Input some info' });
}
);

router.post('/draw', function (req, res, next) {
  let db = new sqlite3.Database('./Base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the Base database.');
  });
  let sql = `SELECT UserID as id,
              Name as name,
              Age as age,
              City as city
            FROM First`
  let data = [];

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      newdata = data.push({ "Id": row.id, "Name": row.name, "Age": row.age, "City": row.city, });
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

router.post('/addpost', function (req, res, next) {
  let db = new sqlite3.Database('./base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) { console.error(err.message); }
    console.log('Connected to the Base database.');
  });

  let sql = `SELECT 
              Name, Age, City               
            FROM 
              First
            WHERE
              Name = ?;`
  let Name = `${req.body.Name}`;

  
    db.get(sql, [Name], (err, row) => {
      if (err) {
        return console.error(err.message);
      }
      return row
        ? ( (console.error(` Такое имя уже есть ${Name}`), res.sendStatus(500)) )
        : (db.each(`    
      INSERT INTO First (Name, Age, City)
        VALUES
          ("${req.body.Name}", ${req.body.Age}, "${req.body.City}" );
    `),
    res.sendStatus(200))
    });
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
 
  
}
);

module.exports = router;