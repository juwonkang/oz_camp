
const days = document.getElementById("days");
const span1 = document.querySelector(".number1");
const span2 = document.querySelector(".number2");
const span3 = document.querySelector(".number3");
const span4 = document.querySelector(".number4");
const mybirth = document.querySelector(".mybirth");

let countdown; 


function updateCountdown(targetDate) {
    const now = new Date(); // 현재 시간을 가져옵니다.
    const timeDifference = targetDate - now; // 입력된 생일과 현재 시간 사이의 차이를 계산합니다.

   
    let day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((timeDifference % (1000 * 60)) / 1000);

    
    span1.textContent = `${day}`;
    span2.textContent = `${hour}`;
    span3.textContent = `${min}`;
    span4.textContent = `${sec}`;
}


function myBirthDay() {
    const bir = prompt(`당신의 생일을 입력하시오 (예 : 2024-06-13)`);

    if (bir) {
        const targetDate = new Date(bir); // 입력된 생일을 Date 객체로 변환합니다.

        // 이전 카운트다운 interval을 지우고, 새로운 interval을 설정합니다.
        clearInterval(countdown);
        updateCountdown(targetDate);
        countdown = setInterval(function () {
            updateCountdown(targetDate);
        }, 1000);
    }else{
        alert("다시입력해주세요")
    }
   
}


mybirth.addEventListener("click", function () {
    myBirthDay();
 
   
});

// 초기에는 기본적인 카운트다운을 시작합니다 (예 : 2024년 12월 31일).
const defaultTargetDate = new Date("2024-12-31");
countdown = setInterval(function () {
    updateCountdown(defaultTargetDate);
}, 1000);


