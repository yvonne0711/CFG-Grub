function myFunction1() {
    
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    var len = checkboxes.length

    console.log(len)
  
        if (len===6){
            alert("Congrats! Enjoy your meal!")
            return
        } else{
            alert("Have you completed all the steps?")
            return
        }
}
    