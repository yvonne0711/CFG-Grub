function myFunction() {
    // Get the checkbox

    var checkBox = document.getElementByName("step6");
    var length = checkbox.length
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        allsteps();
      } else {
        alert("none");
      }
    }

    function allsteps() {
        var boxes = document.getElementById(checkbox)
        if (boxes.length === 6) {
            alert("Congratulations! Enjoy your meal!")
        }
        else {
            alert("Have you completed all the steps?")
        }
    }