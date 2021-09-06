var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose(); 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('app', { title: 'Input some info' });
}   
);
/*
app.get('/', async (req, res) => {
  const query = await axios.get('http://localhost:3001/results');
  res.render('index', { employees: query.data });
});
*/


router.post('/add', function(req, res, next) {  
  console.log(req.query.Name);
  let db = new sqlite3.Database('./Base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
      console.log('Connected to the Base database.');
    });
    console.log(req.query);
    console.log(req.body);
    console.log(req.body.Name);
    console.log(res.body);
    console.log(res.query);
  console.log(req.Name);
    db.serialize(() => {
      db.each(`    
                INSERT INTO First (Name, Age, City)
                  VALUES
                    (Name = Name,
                      Age = Age,
                      City = City);
              `)
    });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });                                   
}   
);

/*
db.each(`SELECT UserID as id,
                  Name as name,
                  City as city
               FROM First`, (err, row) => {
                  if (err) {
                    console.error(err.message);
                  }
                  console.log(row.id + "\t" + row.name + row.city);
                });
                */

/*
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
})

db.close()*/
module.exports = router;