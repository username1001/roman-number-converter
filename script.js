
function convertToRoman(num) {

  num = document.getElementById("enteredNum").value;
  if(num === '' || isNaN(num)) {
    alert("Please enter a number.");
    return false;
  }
  // Array containing Roman numerals.
  var roman_numbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // Array containing modern numbers.  
  var modern_numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Converted is where the number will appear.
  var converted = '';  

  // Run through the modern numbers array
  for(var i = 0; i < modern_numbers.length; i++) {

    // check if the current modern number is less than or equal to num
     while (modern_numbers[i] <= num) {

       // and add it into converted string as a roman number
      converted += roman_numbers[i];
      num -= modern_numbers[i];
    }
  }
  
 document.getElementById("display").innerHTML = '<p id="romano">' + converted.fontsize(5) + '</p>';

 document.getElementById("romano").style.border = "1px solid black";
 document.getElementById("romano").style.color = "#FBE673";
 document.getElementById("romano").style.backgroundColor = "#9E3818";
}
