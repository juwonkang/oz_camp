const buttons = document.getElementsByClassName("button");
const screen = document.getElementById("screen");
const operate = document.getElementsByClassName("operate"); // 수정: getElementById 사용


let operatorOn = '';
let previousNum = '';
let resentNum = '';



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        screen.value += buttons[i].value;
        previousNum = parseInt(screen.value)
        console.log(previousNum)
    });
}

for(let j= 0; j < operate.length; j++){
  operate[j].addEventListener("click" , function(){
    screen.value += operate[j].value;
    operatorOn =screen.value
    console.log(operatorOn)

  })
}




let calculate = (previousNum, operate, operatorOn) => {
    let result = 0;
    switch (operate){
        case '+' :
            result = Number(previousNum) + Number(operatorOn)
            break;
        case '-':
            result = Number(previousNum) - Number(operatorOn);
            break;
        case 'x':
            result = Number(previousNum) * Number(operatorOn);
            break;
        case '/':
            result = Number(previousNum) / Number(operatorOn);
            break;
        default:
            break;    
    }
    return String(result)
}

