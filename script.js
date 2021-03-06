function convertToRoman(num) {
  
  num = document.getElementById("enteredNum").value;
  
  if (num === '' || isNaN(num)) {
    alert("Please enter a number.");
    return false;
  }
  
  // Arrays that contain the two number systems for conversion.
  const roman_numbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 
  const modern_numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Converted is where the Roman numeral will appear.
  let converted = '';  

  // Run through the modern numbers array
  for (let i = 0; i < modern_numbers.length; i++) {

    // check if the current modern number is less than or equal to num(the entered number).
     while (modern_numbers[i] <= num) {

       // and let the conversion begin
      converted += roman_numbers[i];
      num -= modern_numbers[i];
    }
  }
  
 // Displaying the Roman numeral.
 document.getElementById("display").innerHTML = '<p id="romano">' + converted.fontsize(5) + '</p>';
  
 // Some styling. Gold and red, Roman colors. 
 document.getElementById("romano").style.border = "1px solid black";
 document.getElementById("romano").style.color = "#FBE673";
 document.getElementById("romano").style.backgroundColor = "#9E3818";
};
