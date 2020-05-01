function addRow() {
 	
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var phone = document.getElementById("phone");
    var state = document.getElementById("state");
    var city = document.getElementById("city");
    var country = document.getElementById("country");
    var gender = document.getElementById("male");
    var gender = document.getElementById("female");
    var color = document.getElementById("red");
    var color = document.getElementById("orange");
    var message = document.getElementById("message");
    var table = document.getElementById("myTableData");	
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= email.value;
    row.insertCell(2).innerHTML= age.value;
    row.insertCell(3).innerHTML= phone.value;
    row.insertCell(4).innerHTML= state.value;
    row.insertCell(5).innerHTML= city.value;
    row.insertCell(6).innerHTML= country.value;
    row.insertCell(7).innerHTML= gender.value;
    row.insertCell(8).innerHTML= color.value
    row.insertCell(9).innerHTML= message.value;
 
}



