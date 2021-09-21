/*!
* Start Bootstrap - Small Business v5.0.3 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//   return new bootstrap.Collapse(collapseEl)
// })

function myFunction1() {
    // Get the checkbox
    var checkBox = document.getElementsByName("step6");

    var checkBoxes = document.getElementsByClassName("checkbox");

    var len = checkBoxes.length
    // Get the output text
    var text = "Yays";
  
    // If the checkbox is checked, display the output text
    
        if (len===6){
            alert("Congrats! Enjoy your meal!")
        }
        else{
            alert("Have you completed all the steps?")
        }
}
