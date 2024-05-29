let tds; // 테이블의 모든 셀을 담을 변수
let curLoc; // 텍스트가 출력되는 셀의 번호 (0 ~ size*size - 1)
let size; // 테이블의 가로, 세로 셀 수

// 웹 페이지가 다 로드된 후 실행되는 함수
window.onload = function startMouseClick() {
    // 버튼을 찾아서 클릭 이벤트에 함수 등록
    const startBtn = document.querySelector("#startBtn");
    startBtn.onclick = function () {
        // 입력된 테이블 크기를 가져옴. 값이 없으면 placeholder 사용
        const numberInput = document.querySelector("#numberInput");
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        } else {
            size = numberInput.value;
        }
        console.log(size);

        // 테이블을 넣을 영역을 찾음
        const tableArea = document.querySelector(".tableArea");

        // 테이블 HTML을 만듦
        let tableHTML = '<table class="w-auto">\n' + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>\n').repeat(size) + '</table>\n';
        
        // 만든 테이블 HTML을 테이블 영역에 추가
        tableArea.innerHTML = tableHTML;

        // 테이블의 모든 셀을 찾아서 td 변수에 저장
        tds = document.querySelectorAll("td");
        curLoc = 0;

        // 랜덤한 셀에 텍스트를 출력
        randomLocText();
    }
}

// 키보드를 눌렀을 때 실행되는 함수
window.onkeydown = function(event) {
    if (event.key == "Enter") { // Enter 키를 눌렀을 때
        startMouseClick(); // 테이블을 다시 만듦
        curLoc = 0;
    }
}

// 랜덤한 셀에 텍스트를 출력하고 클릭 이벤트를 등록하는 함수
function randomLocText() {
    // 현재 셀의 내용을 지움
    tds[curLoc].innerHTML = "";
    tds[curLoc].onclick = null;

    // 새로운 셀을 랜덤으로 선택
    curLoc = Math.floor(Math.random() * (size * size));
    console.log(curLoc);

    // 새로운 셀에 텍스트를 출력
    tds[curLoc].innerHTML = "안녕^^";
    // 셀을 클릭하면 randomLocText을 다시 실행하도록 등록
    tds[curLoc].onclick = randomLocText;
}
