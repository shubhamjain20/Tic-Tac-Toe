let mainArr = [0,0,0,0,0,0,0,0,0,0];
let a = true;


class MainGame{
     winning(){
        if(mainArr[0] == 1 && mainArr[1] == 1 && mainArr[2] == 1  ||
            mainArr[3] == 1 && mainArr[4] == 1 && mainArr[5] == 1 ||
            mainArr[6] == 1 && mainArr[7] == 1 && mainArr[8] == 1 ||
            mainArr[0] == 1 && mainArr[3] == 1 && mainArr[6] == 1 ||
            mainArr[1] == 1 && mainArr[4] == 1 && mainArr[7] == 1 ||
            mainArr[2] == 1 && mainArr[5] == 1 && mainArr[8] == 1 ||
            mainArr[0] == 1 && mainArr[4] == 1 && mainArr[8] == 1 ||
            mainArr[2] == 1 && mainArr[4] == 1 && mainArr[6] == 1 )
            {
               winningSection.textContent = "Player 1 Wins!"
               sound.play();
            }
        else if(mainArr[0] == 2 && mainArr[1] == 2 && mainArr[2] == 2 ||
            mainArr[3] == 2 && mainArr[4] == 2 && mainArr[5] == 2 ||
            mainArr[6] == 2 && mainArr[7] == 2 && mainArr[8] == 2 ||
            mainArr[0] == 2 && mainArr[3] == 2 && mainArr[6] == 2 ||
            mainArr[1] == 2 && mainArr[4] == 2 && mainArr[7] == 2 ||
            mainArr[2] == 2 && mainArr[5] == 2 && mainArr[8] == 2 ||
            mainArr[0] == 2 && mainArr[4] == 2 && mainArr[8] == 2 ||
            mainArr[2] == 2 && mainArr[4] == 2 && mainArr[6] == 2)
            {
                winningSection.textContent = "Player 2 Wins!"
              
            }
     }

     setXorO(num){
        if(a && mainArr[num] == 0){
            
            document.getElementById(`box-${num+1}`).textContent = "X";
            mainArr[num] = 1;
            a = false;
        }
        else if(mainArr[num] == 0){
            document.getElementById(`box-${num+1}`).textContent = "0";
            mainArr[num] = 2;
            a = true;
        }
     }

     resetGame(){
         for(let i in mainArr){
            mainArr[i] = 0;
         }

         for(let i of boxes){
           i.textContent = "";
         }
     
         winningSection.textContent = "";
         gameState = true;
        }
}

let mainGame = new MainGame();

let boxes = document.querySelectorAll(".boxes");
let restartButton = document.querySelector(".restart");
let winningSection = document.querySelector(".winningSection");




boxes.forEach((boxes,ele)=>{
   boxes.addEventListener("click",()=>{
    mainGame.setXorO(ele);
    mainGame.winning();
   });
  
});

restartButton.addEventListener("click",()=>{
    mainGame.resetGame();
});


