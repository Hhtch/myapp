async function onClick(){
 Name = document.getElementById('Name');
 Age = document.getElementById('Age');
 City = document.getElementById('City');
 InputName = Name.value;
 InputAge = Age.value;
 InputCity = City.value; 
 
 let res = await fetch('/first/addpost',  {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "Name" : InputName,
        "Age" : InputAge,
        "City": InputCity,
   }),
  });


if (res.responseStatus === 200){
  //draw table
  console.log( "row added" );
} else {
  console.error( "row added" );
}
}

