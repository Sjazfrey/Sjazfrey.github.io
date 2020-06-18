let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] // Alphabet A-Z 

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

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

$(function(){
      
    // while (a = table.rows -column)
    alphabet = shuffle(alphabet);
    for (let i = 0; i < 6; i++) {
    //iterate through rows
           for (let j = 0; j < 6; j++) {
        //iterate through columns
            let rowColumn = ".row" + (i + 1) + "-column" + (j + 1)
            //columns would be accessed using the "col" variable assigned in the for loop
            $(rowColumn).text(alphabet[i * 6 + j])
        }  
    }

    $('td').on("click", function(event){
       ($(event.currentTarget).toggleClass('flipped'))
    })
})

  //flip a card
function flip() {
    $('.card').toggleClass('flipped');
}
