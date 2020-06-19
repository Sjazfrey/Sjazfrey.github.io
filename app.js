let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] // Alphabet A-Z 

// Game Play (Match)
// 1) Click r1c1 -- it flips and we see 'A'
// 2) Click r2c2 -- it flips and we see 'A' -- match
//    2a) Alert the user they got a match
//    2b) Fade to different color, removing the letter
       $(function(){
        let row = 6;
        let column = 6;
        let alphabet = (row * column) / 2;
        this.getRows = function(){return row}
        this.getColumns = function() {return column}
        this.getMatches = function () {return alphabet}
})
        let pickCard = false;
        let newCard = null;
        let newPairs = alphabet;
// Game Play (Unmatch)
// 1)  r1c1 -- it flips and we see 'A'
// 2)  r2c2 -- it flips and we see 'B'
//    2a) Alert the use it's not a match
//    2b) Cards flip back over
// $('td').on("click", function(event){
//     ($(event.currentTarget).toggleClass('flipped'))
//     $("td").on("click", function(){
//         setTimeout(2000);
//     })
//  })
 
//});
// Click, click
// Match or not a match
//.addEventListner()



// Fisher-Yates (aka Knuth) Shuffle     Should this shuffle upon start of game??
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
            //$(rowColumn).text(alphabet[i * 6 + j])
            $(rowColumn).append ($("<div>").text(alphabet[i * 6 + j]))


            //$(rowColumn).append(alphabet[i * 6 + j])
        }  
    }
    $('td').on("click", function(event){
        ($(event.currentTarget).toggleClass('flipped'))
        $("td").on("click", function(){
            setTimeout(2000);
        })
     })
     

})

 
      