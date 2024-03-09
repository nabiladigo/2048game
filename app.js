const tiles = document.querySelectorAll(".cell");
const score = document.querySelector(".score");
const newGame = document.querySelector(".reset");
const gameStatus = document.querySelector(".status");

let gameScore = 0;
const width = 4;

    function generateNum(){
        let randumNumber = Math.floor(Math.random()*tiles.length);
            if (tiles[randumNumber].innerHTML == ""){
                tiles[randumNumber].innerHTML=2;
                gameOver()
            }else generateNum();
    }
        generateNum();
  

    function moveRight(){
        for(let i=0; i< tiles.length; i++){
            if(i % 4 === 0){
                let row =[ parseInt(tiles[i].innerHTML), parseInt(tiles[i+1].innerHTML), parseInt(tiles[i+2].innerHTML), parseInt(tiles[i+3].innerHTML)];
                let filteredRow = row.filter(num => num); 
                let blank = 4 - filteredRow.length;
                let empty =  Array(blank).fill(""); 
                let newRow = empty.concat(filteredRow); 

                newRow[0] = tiles[i].innerHTML;     
                newRow[1] = tiles[i+1].innerHTML;
                newRow[2] = tiles[i+2].innerHTML;
                newRow[3] = tiles[i+3].innerHTML;
            }
        }
    }


    function moveLeft(){
        for(let i=0; i<16; i++){
            if(i % 4 === 0){
                let row =[ parseInt(tiles[i].innerHTML), parseInt(tiles[i+1].innerHTML), parseInt(tiles[i+2].innerHTML), parseInt(tiles[i+3].innerHTML)];
            
                let filteredRow = row.filter(num => num); 
                let blank = 4 - filteredRow.length;
                let empty =  Array(blank).fill("");    
                let newRow = filteredRow.concat(empty); 
            
                tiles[i].innerHTML = newRow[0];
                tiles[i+1].innerHTML = newRow[1];
                tiles[i+2].innerHTML = newRow[2];
                tiles[i+3].innerHTML = newRow[3];
            }
        } 
    }

    function moveUp(){
        for(let i=0; i<4; i++){
            let column= [ parseInt(tiles[i].innerHTML), parseInt(tiles[i+width].innerHTML), parseInt(tiles[i+(width*2)].innerHTML), parseInt(tiles[i+(width*3)].innerHTML)];

            let filteredColumn = column.filter(num => num);    
                let blank = 4 - filteredColumn.length;
                let empty =  Array(blank).fill(""); 
                let newColumn = filteredColumn.concat(empty); 
            
                tiles[i].innerHTML = newColumn[0];
                tiles[i+(width)].innerHTML = newColumn[1];
                tiles[i+(width*2)].innerHTML = newColumn[2];
                tiles[i+(width*3)].innerHTML = newColumn[3];
        }

    }


    function moveDown(){
        for(let i=0; i<4; i++){

            let column= [ parseInt(tiles[i].innerHTML), parseInt(tiles[i+width].innerHTML), parseInt(tiles[i+(width*2)].innerHTML), parseInt(tiles[i+(width*3)].innerHTML)];

            let filteredColumn = column.filter(num => num);
            let blank = 4 - filteredColumn.length;
            let empty =  Array(blank).fill(""); 
            let newColumn = empty.concat(filteredColumn); 
            
                tiles[i].innerHTML = newColumn[0];
                tiles[i+width].innerHTML = newColumn[1];
                tiles[i+(width*2)].innerHTML = newColumn[2];
                tiles[i+(width*3)].innerHTML = newColumn[3];
         }

    }


    function totalRow(){
        for(let i=0; i<15; i++){
            if (tiles[i].innerHTML === tiles[i+1].innerHTML && tiles[i].innerHTML !==""){
                let combinedTotal =parseInt(tiles[i].innerHTML) + parseInt(tiles[i+1].innerHTML);
                tiles[i+1].innerHTML = combinedTotal;
                tiles[i].innerHTML = "";
                gameScore += combinedTotal;
                score.innerHTML ="Score :" + gameScore;
            }
        }
        win();
    }


    function totalColumn(){
        for(let i=0; i<12; i++){
            if (tiles[i].innerHTML === tiles[i+width].innerHTML && tiles[i].innerHTML !== ""){
                let combinedTotal =parseInt(tiles[i].innerHTML) + parseInt(tiles[i+width].innerHTML);
                tiles[i+width].innerHTML = combinedTotal;
                tiles[i].innerHTML = "";
                gameScore += combinedTotal;
                score.innerHTML ="Score :" + gameScore;
            }
        }
        win();
    }


    function keyRight(){
        moveRight();
        totalRow();
        moveRight();
        generateNum();
        addColors();
    }

    function keyLeft(){
        moveLeft();
        totalRow();
        moveLeft();
        generateNum();
        addColors();
    }

    function keyUp(){
        moveUp();
        totalColumn();
        moveUp();
        generateNum();
        addColors();
    }

    function keyDown(){
        moveDown();
        totalColumn();
        moveDown();
        generateNum();
        addColors();
    }

    function control(e) {
        if (e.keyCode == 39) {
            keyRight()        
        }else if (e.keyCode === 38) {
            keyUp(); 
        }else if (e.keyCode == 40) {
            keyDown();        
        }else if (e.keyCode == 37) {
            keyLeft();     
        }
    }

    function win(){
        for(let i = 0; i< tiles.length; i++){
            if( tiles[i].innerHTML === 2048){
                gameStatus.innerHTML = `you win!`; 
                document.removeEventListener("keyup",control);
            }
        }
    }

    function gameOver(){
        let zeros = ""
        for( let i = 0; i <tiles.length; i++){
            if (tiles[i].innerHTML ==0){
                zeros++
            }
        }
        if (zeros === "" && tiles[i] != tiles[i+1]){
            gameStatus.innerHTML = ' You lose!'
            document.removeEventListener("keyup",control);

        }
    }
   
function handleNewGame() {
    for(let i =0; i< tiles.length; i++){    
        if(tiles[i].innerHTML != "" && tiles.length === 16){
            tiles[i].innerHTML = "";
            gameStatus.innerHTML = "";
            
            score.innerHTML = "Score :" + 0;
        }
    } 
    generateNum();   
}


newGame.addEventListener("click", handleNewGame);
document.addEventListener("keyup",control)








