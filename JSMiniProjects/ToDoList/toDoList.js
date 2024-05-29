window.onload = function() {
    // 페이지가 로드되면 할 일을 입력받는 입력창과 추가 버튼을 찾음
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    
    // 추가 버튼에 클릭 이벤트 리스너를 추가
    addBtn.addEventListener("click", function() {
        // 입력값이 비어있지 않으면 addTodoList 함수 실행
        if (todoInput.value != "") addTodoList();
    });
}

function addTodoList() {
    // 콘솔에 입력값을 출력 (디버깅용)
    console.log(todoInput.value);
    
    // 할 일 목록을 추가할 영역을 찾음
    const listArea = document.querySelector(".listArea");
    
    // 새로운 리스트 아이템(li)와 버튼, 텍스트(span)를 생성
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    // 리스트 아이템에 체크 버튼, 텍스트, 삭제 버튼을 추가
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    // 입력된 할 일 텍스트를 설정하고 입력창을 비움
    todoText.innerText = todoInput.value;
    todoInput.value = "";
    // 삭제 버튼의 텍스트를 'X'로 설정
    delBtn.innerText = "X"

    // 버튼과 텍스트에 클래스 추가
    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");

    // 체크 버튼에 클릭 이벤트 리스너 추가
    checkBtn.addEventListener("click", function() {
        // 버튼이 비어있으면 체크 표시 추가, 그렇지 않으면 제거
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        } else {
            checkBtn.innerHTML = "";
        }
        // 텍스트에 체크된 스타일을 토글
        todoText.classList.toggle("check");
    })

    // 삭제 버튼에 클릭 이벤트 리스너 추가
    delBtn.addEventListener("click", function() {
        // 리스트 아이템을 삭제
        liNode.remove();
    })

    // 마지막에 추가된 아이템을 콘솔에 출력 (디버깅용)
    console.log(listArea.lastChild);
}
