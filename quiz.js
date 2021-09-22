function quiz(){
    i = 0
    alert("Welcome to the quiz! Please type your answers as a,b or c.")
    var ans1 = prompt("What pasta do you feel like? a: Wheat b: Zucchini c: Wholewheat");
    var ans2 = prompt("What sauce would you be? A: Tomato B: Bechamel sauce C: Cheese sauce");
    var ans3 = prompt("How about meat?? A: Beef B: Lamb C: Quorn");
    var ans4 = prompt("What other fillings would you like? A: Ricotta B: Spinach  C: Pumpkin");
    
    const answers = [ans1, ans2, ans3, ans4]
    console.log(answers)


    var numOfA = answers.filter(x => x === "a" || x === "A").length;
    var numOfB = answers.filter(x => x === "b" || x === "B").length;
    var numOfC = answers.filter(x => x === "c" || x === "C").length;    
    
    const mostLetters = [numOfA,numOfB,numOfC]

    temp = 0;

    mostLetters.forEach((element) => {
    if (temp < element) {
        temp = element;
    }
    });

    for (var i = 0; i < mostLetters.length; i++){
        if (temp === numofA) {
            alert("This week you are going to find a new hobby!")
            alert("Thank you for visiting!")
            return
        } else if (temp === numofB) {
            alert("This week you are going to make a lot of money!")
            alert("Thank you for visiting!")
            return
        } else if (temp === numofC) {
            alert("This week you are going to be happy and meet lots of new friends!")
            alert("Thank you for visiting!")
            return
        }

    }
}