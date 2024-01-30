const todoList = document.getElementById('todo-List')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

//할일 추가하기 , 할일 보여주기, 할일 수정하기, 할일 삭제하기

//새로고침해도 화면에 띄우기

window.addEventListener("load" ,function(){
    loadTodos()

})

//저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos" , todoString )
}



//가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos)
            displayTodos()
    }
    
}






// 할일 삭제하기
function handleTodoDelBtnClick(clickedId) {
    todoArr = todoArr.filter(function (aTodo) {
        return aTodo.todoId !== clickedId;
    });
    displayTodos();
    saveTodos();
}










//할일 수정하기
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function (aTodo){
        if(aTodo.todoId === clickedId){
            return{
                ...aTodo, todoDone: !aTodo.todoDone
            }
        }else{
            return aTodo
        }


    })
    displayTodos()
    saveTodos()
}




//할일 보여주기
function displayTodos(){
    todoList.innerHTML =""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement("li")
        const todoDelBtn = document.createElement("span")
        todoDelBtn.textContent = "x"
        todoItem.textContent = aTodo.todoText
        todoItem.title ="클릭하면 완료됨"
        if(aTodo.todoDone){
            todoItem.classList.add("done")
        }else{
            todoItem.classList.add("yet")
        }
        todoItem.addEventListener("click", function () {
            handleTodoItemClick(aTodo.todoId);
        });

        // 삭제 버튼에 클릭 이벤트 추가하여 삭제 처리
        todoDelBtn.addEventListener("click", function () {
            handleTodoDelBtnClick(aTodo.todoId);
        });

        // li 엘리먼트에 삭제 버튼 추가
        todoItem.appendChild(todoDelBtn);

        // todoList에 li 엘리먼트 추가
        todoList.appendChild(todoItem);
    });

        
    
    

    }





//할일 추가하기
todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    const toBeAdded = {
        todoText : todoForm.todo.value,
        todoId : new Date().getTime(),
        todoDone : false
     }

     todoForm.todo.value =""
     todoArr.push(toBeAdded)
     console.log(todoArr)
     displayTodos();
     saveTodos()

})