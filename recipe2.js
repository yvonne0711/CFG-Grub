

function allsteps() {
        var boxes = document.getElementById(checkbox)
        if (boxes.length === 6) {
            alert("Congratulations! Enjoy your meal!")
        }
        else {
            alert("Have you completed all the steps?")
        }
    }

function myFunction() {
        // Get the checkbox
    
        var checkBox = document.getElementByName("step6");

    
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
            alert("yay")
            allsteps();
          } else {
            alert("none");
          }
        }