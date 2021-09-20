function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementsByName("step6");
    // Get the output text
    var text = "Yays";
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      alert("Congrats!");
    } else {
      alert("Oops");  
    }
  }