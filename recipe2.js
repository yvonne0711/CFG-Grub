function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementByName("mystep6");
    // Get the output text
    var text = "Yays";
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }