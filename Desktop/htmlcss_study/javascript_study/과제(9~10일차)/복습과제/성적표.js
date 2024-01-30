const button = document.getElementById("button");
const inputName = document.getElementById("input-name");
const container = document.getElementById("container");
const selectElement = document.getElementById("select");
const outputscreen = document.getElementById("outputscreen");
const deleteButton = document.getElementById("deleteButton");

let list = []; // list 변수를 전역으로 이동

function saved() {
    const alist = JSON.stringify(list);
    localStorage.setItem("name", alist);
}

function loadAndDisplay() {
    let already = localStorage.getItem("name");
    let already1 = JSON.parse(already);
    container.innerText = already1.join(', '); 
}

// 저장
button.addEventListener("click", function () {
    const score = prompt("점수를 입력해주세요");
    list.push(score);
    saved();

    const record = document.createElement("p");
    record.innerText = score;
    container.appendChild(record);
});

// 지우기 버튼 클릭 이벤트
deleteButton.addEventListener("click", function () {
    localStorage.removeItem("name");
    container.innerText = ""; // Clear the container
});

selectElement.addEventListener("click", function () {
    let compare = localStorage.getItem("name");
    let compares = JSON.parse(compare);

    // 화면 초기화
    outputscreen.innerText = "";

    console.log(compare);

    for (let i = 0; i < compares.length; i++) {
        if (compares[i] && Number(compares[i]) > 70) {
            const outrecord = document.createElement("p");
            outrecord.innerText = compares[i];
            outputscreen.appendChild(outrecord);
        }
    }
});

// 페이지 로드 시 로컬 스토리지 데이터 표시
window.addEventListener("load", loadAndDisplay);
