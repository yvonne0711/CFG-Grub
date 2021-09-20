document.getElementByTagName('step6').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // Returns true if checked
        calculateCheckbox();
    } else {
        // Returns false if not checked
    }
};

function calculateCheckbox() {
    // get beauty products checkboxes contianer's reference
    var el = document.getElementById('checkbox');
  
    // get beauty product input element reference in beauty products container
    var products = el.getElementsByTagName('input');
  
    // get products length
    var len = products.length;
  
    // call updateCost() function to onclick event on every checkbox
    if (len===6) {
        alert("Congratulations! Enjoy your meal")
    }
    else {
        alert("Did you do all the steps?")
    }

    
  }

