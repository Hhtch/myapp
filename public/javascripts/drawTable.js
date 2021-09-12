async function drowTable() {

  let response = await fetch('/first/draw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(),
  });
  res = await response.json();

  const tableHeaders = ['Id', 'Name', 'Age', 'City'];

  let tbl = document.getElementById('Table');
  tbl.innerHTML = "";

  let tr = tbl.insertRow();
  for (heder in tableHeaders) {
    document.createElement('th');
    th = tr.insertCell();
    th.appendChild(document.createTextNode(tableHeaders[heder]));
    th.setAttribute('id', 'th')
  }

  for (let i = 0; i < res.length; i++) {
    let tr = tbl.insertRow();
    let arr = [res[i].Id, res[i].Name, res[i].Age, res[i].City]
    for (let j = 0; j < arr.length; j++) {
      let td = tr.insertCell();
      td.appendChild(document.createTextNode(arr[j]));
    }
  }
}

drowTable();
