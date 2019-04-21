document.getElementById("output").style.visibility="hidden";
document.getElementById("inpbtn").addEventListener("click", function(){
 let lbs = document.getElementById("inpu").value;
document.getElementById("output").style.visibility="visible";
  document.getElementById("ozoutput").innerHTML = lbs * 16;
  document.getElementById("kgoutput").innerHTML =lbs /0.0022046;
   document.getElementById("Goutput").innerHTML =lbs /2.2046;
});