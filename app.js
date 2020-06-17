let tile = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // Alphabet A-Z 

// create a variable that stores the used letters, this variable will be an array[] (4)
     let letters = [] 
// function to generate random number between 0 and 25, this will pick a letter from the alphabet (3) MDN Math.random
function randomNumber() {
    let x = Math.floor((Math.random() * 25) + 1);
}
console.log(randomNumber(25));

// function that inserts a letter in your table using jquery (e.x $('.row2-column3')) (5)
function letters() {
    let R1C1= $(".row1-column1").text()
    let R1C2= $(".row1-column2").text()
    let R1C3= $(".row1-column3").text()
    let R1C4= $(".row1-column4").text()
    let R1C5= $(".row1-column5").text()
    let R1C6= $(".row1-column6").text()
    if (R1C1 == "" && R1C2=="" && R1C2==""){
         $(".).text("")
     }
    let R2C1= $(".row2-column1").text()
    let R2C2= $(".row2-column2").text()
    let R2C3= $(".row2-column3").text()
    let R2C4= $(".row2-column4").text()    
    let R2C5= $(".row2-column5").text()
    let R2C6= $(".row2-column6").text()
    if (R2C6 == "" && R2C2=="" && R2C3 ==""){
         $("").text("")
     }
     let R3C1= $(".row3-column1").text()
     let R3C2= $(".row3-column2").text()
     let R3C3= $(".row3-column3").text()
     let R3C4= $(".row3-column4").text()
     let R3C5= $(".row3-column5").text()
     let R3C6= $(".row3-column6").text()    
     if (R3C1 == "X" && R3C2=="X" && R3C3 =="X"){
        $(".").text("")
     }
     
      R4C1= $(".row4-column1").text()
      R4C2= $(".row4-column2").text()
      R4C3= $(".row4-column3").text()
      R4C4= $(".row4-column1").text()
      R4C5= $(".row4-column2").text()
      R4C6= $(".row4-column3").text()
     if (R1C1 == "" && R1C2=="" && R1C3 ==""){
         $("").text("")
     }
      R5C1= $(".row5-column1").text()
      R5C2= $(".row5-column2").text()
      R5C3= $(".row5-column3").text()
      R5C4= $(".row5-column4").text()
      R5C5= $(".row5-column").text()
      R5C6= $(".row5-column6").text()
     if (R2C1 == "" && R2C2=="" && R2C3 ==""){
         $("").text("")
     }
      R6C1= $(".row6-column1").text()
      R6C2= $(".row6-column2").text()
      R6C3= $(".row6-column3").text()
      R6C4= $(".row6-column4").text()
      R6C5= $(".row6-column5").text()
      R6C6= $(".row6-column6").text()
     if (R3C1 == "" && R3C2=="" && R3C3 ==""){
        $("").text("")
     }
    
}
// function to generate random number between 0 and 5, this will be used to determine the position on the gameboard (2) MDN Math.random
function randomNumber() {
    let x = Math.floor((Math.random() * 5) + 1);
}
console.log(randomNumber(1));

    


jQuery on.click event for all td (1)
$('td').on("click", function(event){

})

// //flip a card
// function flip() {
//     $('.card').toggleClass('flipped');
// }
