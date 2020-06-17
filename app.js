let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // Alphabet A-Z 

// Game Play (Match)
// 1) Click r1c1 -- it flips and we see 'A'
// 2) Click r2c2 -- it flips and we see 'A' -- match
//    2a) Alert the user they got a match
//    2b) Fade to different color, removing the letter

// Game Play (Unmatch)
// 1)  r1c1 -- it flips and we see 'A'
// 2)  r2c2 -- it flips and we see 'B'
//    2a) Alert the use it's not a match
//    2b) Cards flip back over

// Click, click
// Match or not a match
//set up game upon visit

// gameboard 36 tiles
// 2 of each letters

// -column2
// -column4
//loop through squares 
$(function(){
    for (i = 0; i < 18; i++){
        let tile = randomNumber()  
        let randomLetter = alphabet[tile]; 
        for (a = 0; a < 2; a++){
            let rowColumn;
            do {
                let rowNumber = newNumber()
                let columnNumber = newNumber()
                rowColumn = ".row" + columnNumber + "-column" + rowNumber
                console.log(rowColumn)
                
                if ($(rowColumn).text() === null ||$(rowColumn).text()===""){
                     $(rowColumn).text(randomLetter)              
                }
            } while($(rowColumn).text() !== randomLetter);
        }
    }   
    // while (a = table.rows -column)
    // for (var i = 0, row; row = table.rows[i]; i++) {
    //     //iterate through rows
    //     //rows would be accessed using the "row" variable assigned in the for loop
    //     for (var j = 0, col; col = row.cells[j]; j++) {
    //       //iterate through columns
    //       //columns would be accessed using the "col" variable assigned in the for loop
    //     }  
   
})

// created a variable that stores the used letters, this variable will be an array[] (4)
     let letters = [] 
// function to generate random number between 0 and 25, this will pick a letter from the alphabet 
function randomNumber() {
    let x = Math.floor((Math.random() * 25) );
    return x;
}

// function that inserts a letter in your table using jquery 
function insertLetters() {
    let R1C1= $(".row1-column1").text()
    let R1C2= $(".row1-column2").text()
    let R1C3= $(".row1-column3").text()
    let R1C4= $(".row1-column4").text()
    let R1C5= $(".row1-column5").text()
    let R1C6= $(".row1-column6").text()
    
     
    let R2C1= $(".row2-column1").text()
    let R2C2= $(".row2-column2").text()
    let R2C3= $(".row2-column3").text()
    let R2C4= $(".row2-column4").text()    
    let R2C5= $(".row2-column5").text()
    let R2C6= $(".row2-column6").text()
   
     
     let R3C1= $(".row3-column1").text()
     let R3C2= $(".row3-column2").text()
     let R3C3= $(".row3-column3").text()
     let R3C4= $(".row3-column4").text()
     let R3C5= $(".row3-column5").text()
     let R3C6= $(".row3-column6").text()    
     
     
     
      R4C1= $(".row4-column1").text()
      R4C2= $(".row4-column2").text()
      R4C3= $(".row4-column3").text()
      R4C4= $(".row4-column1").text()
      R4C5= $(".row4-column2").text()
      R4C6= $(".row4-column3").text()
     
     
      R5C1= $(".row5-column1").text()
      R5C2= $(".row5-column2").text()
      R5C3= $(".row5-column3").text()
      R5C4= $(".row5-column4").text()
      R5C5= $(".row5-column").text()
      R5C6= $(".row5-column6").text()
     
     
      R6C1= $(".row6-column1").text()
      R6C2= $(".row6-column2").text()
      R6C3= $(".row6-column3").text()
      R6C4= $(".row6-column4").text()
      R6C5= $(".row6-column5").text()
      R6C6= $(".row6-column6").text()
    
     
    
}
// function to generate random number between 0 and 5, this will be used to determine the position on the gameboard (2) MDN Math.random
function newNumber() {
    let x = Math.floor((Math.random() * 6) + 1);
    return x;
}


    


//jQuery on.click event for all td (1)
$('td').on("click", function(event){

})

// //flip a card
// function flip() {
//     $('.card').toggleClass('flipped');
// }
