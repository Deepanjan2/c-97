var petname = localStorage.getItem("petname");
var phno = localStorage.getItem("phno");
var mailid = localStorage.getItem("mailid");



function adduser()

{
  document.getElementById("pt").innerHTML =  petname ;
 document.getElementById("pt").innerHTML = petname;
 document.getElementById("ph").innerHTML = phno ;
 document.getElementById("ml").innerHTML = mailid ;
 console.log(pt)  
}


function logout()
{
   window.location = "index.html"
}
