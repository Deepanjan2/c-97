


function back()
{
  
  
  window.location = "index.html";

}




document.getElementById("phno").value;

document.getElementById("mailid").value;

function conti()
{
  petname = document.getElementById("petname").value ;
  localStorage.setItem("petname", petname) ;

  phno = document.getElementById("phno").value ;
  localStorage.setItem("phno", phno);

  mailid = document.getElementById("mailid").value ;
  localStorage.setItem("mailid", mailid);

  console.log()

  window.location = "details.html";
}

function tscapply()
{
  window.location = "tscapply.html" ;
}