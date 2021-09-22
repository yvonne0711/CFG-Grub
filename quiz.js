function quiz(){
    i = 0
    var ans1 = prompt("What colour is found on 75% of the world’s flags? a: red b: blue c: white");
    if (ans1 ===  "a" || ans1 === "A"){
        i = i + 1
    } 
    var ans2 = prompt("The song 'How Far I'll Go' features in which Disney film? A: Maleficient B: Moana C: Enchanted");
    if (ans2 ===  "b" || ans2 === "B"){
        i = i + 1
    } 
    var ans3 = prompt("In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy? A: Pineapple B: Apple C: Strawberry");
    if (ans3 ===  "a" || ans3 ==="A"){
        i = i + 1
    } 
    var ans4 = prompt("In which country did the Mojito cocktail originate? A: Colombia B: Portugal C: Cuba");
    if (ans4 === "c" || ans4 === "C"){
        i = i + 1
    } 
    var ans5 = prompt("Last question! Which animal name means river horse? A: Dolphin B: Hippopotamus C: Platypus");
    if (ans5 ===  "b" || ans5 === "B"){
        i = i + 1
    } 
    alert("The answers were red (found on 75% of flags), Moana (How Far I'll Gopy), Cuba (Mojito), pineapple (men's Wimbledon tro), hippopotamus (river dolphin). And your score is " + i + ".")
}