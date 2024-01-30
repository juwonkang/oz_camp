
const today = document.getElementById("today")
const numbers = document.getElementById("numbers")
const draw = document.getElementById("draw")
const reset = document.getElementById("reset")

let lottoNumbers = []


const now = new Date()




let year = now.getFullYear()
let month = now.getMonth() + 1
 let date = now.getDate()
 let hour = now.getHours()
 let min = now.getMinutes()
 let sec = now.getSeconds()

today.textContent = `${year}년 ${month}월 ${date}일 로또 번호 추첨`




function paintNumber(number){
    const eachNumberDiv = document.createElement("div")
    eachNumberDiv.classList.add("eachnum")
    eachNumberDiv.textContent = number
    numbers.append(eachNumberDiv)



}



draw.addEventListener("click"  , function(){
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45 ) +1

        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)

            paintNumber(rn)

        }

        
    }
    
} )


reset.addEventListener("click" , function(){
    lottoNumbers.splice(0,6)
    numbers.innerHTML = ''
})


//과제 추첨눌렀을대 다시 자동으로 추첨되게