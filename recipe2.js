function myFunction1() {
    // Get the checkbox
    var checkBox = document.getElementsByName("step6");
    var checkBoxes = document.getElementsbyId("checkbox");
    var len = checkBoxes.length
    // Get the output text
    var text = "Yays";
  
    // If the checkbox is checked, display the output text
    
        if (len===6){
            alert("Congrats! Enjoy your meal!")
        }
        else{
            alert("Have you completed all the steps?");
        }
}