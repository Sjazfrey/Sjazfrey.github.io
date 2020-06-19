let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] // Alphabet A-Z 

// Game Play (Match)

//    2a) Alert the user they got a match
//    2b) Fade to different color, removing the letter
       
// Game Play (Unmatch)
//    2a) Alert the use it's not a match
//    2b) Cards flip back over


// Fisher-Yates (aka Knuth) Shuffle    This shuffle upon start of game??
 function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

 $(function(){                     // while (a = table.rows -column)
    alphabet = shuffle(alphabet);
    for (let i = 0; i < 6; i++) {
    //iterate through rows
        for (let j = 0; j < 6; j++) {        //iterate through columns
            let rowColumn = ".row" + (i + 1) + "-column" + (j + 1) + "> .back" 
            //.row1-column1 > .back         
            $(rowColumn).text(alphabet[i * 6 + j])
        }  
    }
    $('td').on("click", function(event){
       // ($(event.currentTarget).toggleClass('flipped'))
        let clickClass = ($(event.currentTarget).attr('class').split(' ')[0]);
        $("." + clickClass).toggleClass('flipped')
        console.log(clickClass)
        let rowColumn = "." + clickClass + "> .back" // .row1-column1 > .back
        let clickLetter = $(rowColumn).text()        
        console.log(clickLetter)
        box.push(clickLetter) 
        console.log(box)// [B, O] 
        if (box.length == 2){
            if (box[0] == box[1]) {
                console.log(true)        
            }  
            else {
                setTimeout(function(){
                    $("td").removeClass('flipped')
                }, 1500)

                console.log(false)
            }
            box = []
        }
    })
     let box = [] // [N, M]
})

 
      