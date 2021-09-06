function onClick(Name, Age, City){
 console.log(Age);
 let a = fetch('/first/add',  {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        Name : Name,
        Age : Age,
        City:  City,
  }),
});
}

/*
fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
    method: 'post',
    body: JSON.stringify({email: 'max@test.com', password: '12345'}),
    headers: {
        'content-type': 'application/json'
    }
})
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
