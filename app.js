// let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] // Alphabet A-Z 

let alphabet = [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']

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
       if (waiting == true) {
           return;
       }

        let clickClass = ($(event.currentTarget).attr('class').split(' ')[0]);
        $("." + clickClass).addClass('flipped')
        console.log(clickClass)
        let rowColumn = "." + clickClass + "> .back" // .row1-column1 > .back
        let clickLetter = $(rowColumn).text()        
        console.log(clickLetter)
        if ( $("." + clickClass).hasClass("matched")) {
            return
        }
        box.push(clickLetter) 
        console.log(box)// [B, O] 
        console.log('Waiting' + waiting);
        if (box.length == 2){
            waiting = true;
            if (box[0] == box[1]) {
                $(".flipped").addClass("matched").removeClass("flipped")
                waiting = false;
                console.log(true) 

            }  
            else {
                setTimeout(function(){
                    $("td").removeClass('flipped')
                    waiting = false;
                }, 1000)

                console.log(false)
            }
            box = []
        }

        let endGame = $('.matched').length
        if (endGame == 36){
            console.log("You Won!")
        }
        console.log('Matches: ' + endGame)
    })

    let box = [] // [N, M]
    let waiting = false;
})

 
      