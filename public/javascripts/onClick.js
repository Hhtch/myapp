function onClick(){
 Name = document.getElementById('Name');
 Age = document.getElementById('Age');
 City = document.getElementById('City');
 InputName = Name.value;
 InputAge = Age.value;
 InputCity = City.value; 
 
 let a = fetch('/first/addpost',  {
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
}