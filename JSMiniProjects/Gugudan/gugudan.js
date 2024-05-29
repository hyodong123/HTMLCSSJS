// 페이지가 다 로드된 후 실행
window.onload = function () { 
    // 버튼을 찾아서 btnNode 변수에 저장
    const btnNode = document.querySelector("button");
    // 버튼을 클릭하면 실행되는 함수 추가
    btnNode.addEventListener("click", function() {

        // 입력한 단 수를 가져와서 danNum 변수에 저장
        const danNum = document.querySelector("#danInput").value;
        console.log(danNum); // 값 확인용

        // danNum 단을 화면에 출력
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        // 결과를 보여줄 영역(resultNode)을 찾아서 저장
        const resultNode = document.querySelector("#result");
        // 결과를 저장할 변수 result 초기화
        let result = "";
        // 1부터 9까지 반복하면서 구구단 계산
        for (let i = 1; i <= 9; i++) {
            result += `${danNum} x ${i} = ${danNum * i}<br>`;
        }
        // resultNode에 계산 결과를 넣어 화면에 보여줌
        resultNode.innerHTML = result;
        // displayArea를 화면에 보이도록 설정
        document.querySelector(".displayArea").style.display = "block";
    });
}
