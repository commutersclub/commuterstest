//Calculate Tip
function calculateTip() {
  var timeamt = document.getElementById("timeamt").value;
  //validate input
	
	
  if (timeamt === "") {
    alert("다시 입력해주세요");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
	
	
  //Calculate tip
  var total = (timeamt *44) ;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
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

