let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset");
let newGame_button = document.querySelector("#New-game")
let message_container = document.querySelector("#msg-container")
let msg = document.querySelector("#msg")

let turnO = true; //PlayerX, PlayerO

let WinPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

boxes.forEach((box) =>{
   box.addEventListener("click", () =>{
    if(turnO){  //PlayerO
        box.innerHTML = "O";
        turnO = false;
    }else{  //PlayerX
        box.innerHTML = "X";
        turnO = true;
    }
    box.disabled = true;
    checkwinner();
   })
})

const checkwinner = () =>{
  for(let pattern of WinPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           showWinner(pos1Val);
        }
    }
  }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    message_container.classList.remove("hide")
    Disable_boxes()
}

const Disable_boxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const Enable_boxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const reset_game = () =>{
    turnO = true;
    Enable_boxes()
    message_container.classList.add('hide')
}

reset_button.addEventListener("click", reset_game);
newGame_button.addEventListener("click", reset_game);