

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
    var count = 0
    for (var i = 0; i < len; i++) {
        if (checkBoxes[i].checked) {
            count += 1
            console.log(count)
        } else {
            console.log(count)
        }
    }

    if (count===6){
        alert("Congrats! Enjoy your meal!")
    } else{
        alert("Have you completed all the steps?")
    }
}
