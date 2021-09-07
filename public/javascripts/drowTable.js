async function drowTable (){    

 let response = await fetch('/first/drow',  {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(),
});
  res = await response.json();
 
  let tbl  = document.getElementById( 'Table' );
    for( let i = 0; i < res.length; i++ ) {
        let tr = tbl.insertRow();
        let arr = [res[i].Id, res[i].Name, res[i].Age, res[i].City ]
          for( let j = 0; j < arr.length; j++ ) {  
            let td = tr.insertCell();
            td.appendChild(document.createTextNode( arr[j] ));                 
          }    
    }
}
