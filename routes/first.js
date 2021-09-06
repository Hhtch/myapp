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

router.post('/drow', function(req, res, next) {
  let db = new sqlite3.Database('./Base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
      console.log('Connected to the Base database.');
    });

  db.serialize(() => {
    db.each(`SELECT UserID as id,
                    Name as name,
                    Age as age,
                    City as city
                FROM First`, (err, row) => {
                    if (err) {
                      console.error(err.message);
                    }
                    console.log(row.id + "\t" + row.name +"\t"+ row.age+"\t"+ row.city);
                    let NN = row.name
                    
                //   let tbl = getElementById("Table");
    
                //   let tr = tbl.insertRow();
                //    let td = tr.insertCell();

              //     td.appendChild(document.createTextNode( 'row.id' ));
                //    td.appendChild(document.createTextNode( 'row.name' ));
                //   td.appendChild(document.createTextNode( 'row.age' ));
                //   td.appendChild(document.createTextNode( 'row.city' ));  
                })
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
/*    db.serialize(() => {
      db.each(`    
                INSERT INTO First (Name, Age, City)
                  VALUES
                    ("${req.query.Name}", ${req.query.Age}, "${req.query.City}" );
              `)
    });
*/
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });                                   
}   
);


//Запрос работает для метода Get
router.get('/addget', function(req, res, next) {  
  let db = new sqlite3.Database('./Base.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
  console.log('Connected to the Base database.');
  });

  db.serialize(() => {
    db.each(`    
            INSERT INTO First (Name, Age, City)
              VALUES
                ("${req.query.Name}", ${req.query.Age}, "${req.query.City}" );
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