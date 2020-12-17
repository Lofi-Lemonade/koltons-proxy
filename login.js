var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "kolton.hueston" && password == "7i#26v+qfba8"){
alert ("Login was successfull");
window.location = "proxy.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("WRONG FUCKING PASSWORD IDIOT You have " +attempt+" attempt(s) left");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}