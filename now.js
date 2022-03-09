//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  
  

  //validate input
  if (billAmt === "") {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  

  //Calculate tip
  var total = (billAmt * 44);
  //round to two decimal places
  
  //next line allows us to always have two digits 
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};