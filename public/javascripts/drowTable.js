function drowTable (){
  console.log("aaaaaaaaaaaaa");
                  
 



 /*let body = document.body,
    tbl  = document.createElement( 'table' );
        for( let i = 0; i < title.length; i++ ) {
            let tr = tbl.insertRow();
            let td = tr.insertCell();
        
            td.appendChild(document.createTextNode( title[i] ));
            td.setAttribute( 'id', 't'+i );
            td.addEventListener
                ("click", () => {clickTitle( i )}, false);       
        }*/


 let a = fetch('/first/drow',  {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(),
});
  console.log(NN);

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
