let num; // 연산한 값을 담는 변수
let res = ''; // $result.value에 입력받은 사칙연산을 보여주게하기 위한 변수
let count = 0; // 입력받은 숫자, 연산자를 담는 배열의 index를 정해주는 변수
let value = []; // 입력받은 숫자가 저장되는 배열
let op = []; // 입력받은 연산자가 저장되는 배열
let setInitial = false; // 연산결과 표시 후 숫자를 입력하면 초기화, 연산자를 입력하면 이어쓰는 동작을 하기 위한 변수

const onClickNumber = (event) => { // document.addEventListener로 마우스를 통해 함수를 실행하기에 중첩 함수로 선언
    if(op[count]) {count++;} // 숫자를 입력 후 연산자가 입력되면 op[count]는 true가 되고 count를 증가시켜 다음 배열에 value를 담게 해줌
    // 연산결과 표시 후 숫자가 입력되면 전체 초기화를 위해 value를 빈 배열로 초기화, setInitial을 false로 변환
    // (op 배열은 밑에 showResult함수가 실행되어 결과가 표시된 후 빈 배열로 초기화 해줌)
    if(setInitial) {value = []; res = ''; setInitial = false;}
    if(value[count] == undefined) {value[count] = '';} // value[count]가 빈 배열이면 ''값으로 초기화
    if(value[count] === 0) res = res.slice(0, -1); // value[count]가 0일 때 숫자가 입력 되면 result 뒤에 0 제거
    // value[count]에 처음에 0이 입력되면 value[count]를 0으로 초기화 (0을 계속 누르면 이어써지는 걸 방지),
    // res를 0으로 초기화하면 기존에 입력된 사칙연산이 다 날라가기에 0을 더함
    // 0이 늘어나는 것을 막기 위해 13번 줄에 value[count]가 0인지 판단 후 뒤에 값(0)을 제거함
    // 그리고 return으로 함수를 반환
    if(!value[count] && event.target.textContent == '0') { value[count] = 0; res += 0; result.value = res; return;}
    // 입력된 숫자를 value[count], res에 붙여씀
    value[count] += event.target.textContent;
    res += event.target.textContent;
    // result.value = res;를 통해 사칙연산 표시
    result.value = res;
};
const onClickOp = (event) => { // document.addEventListener로 마우스를 통해 함수를 실행하기에 중첩 함수로 선언
    if(value[count] || value[count] === 0){ // value[count]의 숫자가 0이거나 그 외 숫자가 들어있다면 실행
        if(!!op[count]) res = res.slice(0, -1); // 입력된 op[count]를 재입력하면 이미 입력됐던 op[count]를 지움
         // 입력된 연산자를 op[count], res에 대입함
        op[count] = event.target.textContent;
        res += event.target.textContent;
        // result.value = res;를 통해 사칙연산 표시
        result.value = res;
        // 연산결과 표시 후 연산자가 입력되면 value의 if(setInitial)에서 실행되는 초기화를 막기 위해 false 대입 
        // (연산결과 표시 후 연산자를 입력하면 이어써지게 하기 위해 showResult함수에서 value[0]에 연산결과 값을 저장시킴)
        setInitial = false;
    }
};

const onKeyDownNumber = (event) => { // onClickNumber함수와 달리 키보드 입력을 받기에 중첩 함수로 선언하지 않음
    // 실행되는 코드는 onClickNumber함수와 동일
    if(op[count]) {count++;}
    if(setInitial) {value = []; res = ''; setInitial = false;}
    if(value[count] == undefined) {value[count] = '';} // value[count]가 undefined이면 ''값으로 초기화
    // 0이 입력된다면 화면에 0 하나만 표시한다.
    if(value[count] === 0) res = res.slice(0, -1); // value[count]가 0일 때 값이 입력 되면 result 뒤에 0 제거
    if(!value[count] && event == 0) { value[count] = 0; res += 0; result.value = res; return;}
    value[count] += event;
    res += event;
    result.value = res;
    console.log(res);
};
const onKeyDownOp = (event) => { // onClickOp함수와 달리 키보드 입력을 받기에 중첩 함수로 선언하지 않음
    // 실행되는 코드는 onClickOp함수와 동일
    if(value[count] || value[count] === 0){
        if(!!op[count]) res = res.slice(0, -1);
        op[count] = event;
        res += event;
        result.value = res;
        setInitial = false;
    }
};

// C를 누르면 실행되는 전체 초기화 함수
const Clear = () => {
    num = 0;
    res = '';
    count = 0;
    value = [];
    op = [];
    result.value = '';
};

// CE를 누르면 실행되는 부분 초기화 함수
const ClearEntry = () => {
    if(op[count]){
        op[count] = '';
        res = res.slice(0, -1);
    }
    else if(value[count] || value[count] == 0){
        for(let i = 0; i < String(value[count]).length; i++){
            res = res.slice(0, -1);
        }
        value[count] = '';
        if(!!count) count--;
    }
    result.value = res;
}

// 연산결과 값을 표시하기 위한 함수
const showResult = () => {
    if(!op[count] && (value[count] || value[count] === 0)){ // res끝에 값이 연산자인지 확인, 아닐 경우 실행
        // console.log(value); // 버그 테스트용 출력
        // console.log(op); // 버그 테스트용 출력
        // 사칙연산이 우선순위에 따라 연산 되도록 함
        // ^, (*, /), (+, -) 순서로 찾음 찾음
        for(let i = 0; op[i]; i++){
            if(op[i] == '^'){
                console.log(value[i], op[i], value[i+1]); // ^ 연산 테스트
                num = parseFloat(value[i]) ** parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        for(let i = 0; op[i]; i++){
            if(op[i] == 'x'){
                console.log(value[i], op[i], value[i+1]); // x 연산 테스트
                num = parseFloat(value[i]) * parseFloat(value[i+1]); //
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }else if(op[i] == '/'){
                console.log(value[i], op[i], value[i+1]); // / 연산 테스트
                num = parseFloat(value[i]) / parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        for(let i = 0; op[i]; i++){
            if(op[i] == '+'){
                console.log(value[i], op[i], value[i+1]); // + 연산 테스트
                num = parseFloat(value[i]) + parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }else if(op[i] == '-'){
                console.log(value[i], op[i], value[i+1]); // - 연산 테스트
                num = parseFloat(value[i]) - parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        // 위 연산 수행 후 자동으로 value[0]에 결과 값이 담김
        result.value = value[0]; // 결과 값을 result.value에 표시
        res = value[0]; // 값을 사칙연산 담는 변수에 대입
        num = 0; // 연산한 값이 담기는 변수를 0으로 초기화;
        count = 0; // 배열 처음부터 값을 입력받기 위해 count를 0으로 초기화
        op = []; // 연산결과 값 표시 후 연산자 초기화
        setInitial = true; // 숫자가 입력되면 초기화 될 수 있게 setInitial을 true로 만듦
    }
}

// 버튼이 눌렸는지 확인 후 함수 실행

document.querySelector('#one').addEventListener('click', onClickNumber);
document.querySelector('#two').addEventListener('click', onClickNumber);
document.querySelector('#three').addEventListener('click', onClickNumber);
document.querySelector('#four').addEventListener('click', onClickNumber);
document.querySelector('#five').addEventListener('click', onClickNumber);
document.querySelector('#six').addEventListener('click', onClickNumber);
document.querySelector('#seven').addEventListener('click', onClickNumber);
document.querySelector('#eight').addEventListener('click', onClickNumber);
document.querySelector('#nine').addEventListener('click', onClickNumber);
document.querySelector('#zero').addEventListener('click', onClickNumber);
document.querySelector('#doubleZero').addEventListener('click', onClickNumber);
document.querySelector('#decimalPoint').addEventListener('click', onClickNumber);

document.querySelector('#plus').addEventListener('click', onClickOp);
document.querySelector('#minus').addEventListener('click', onClickOp);
document.querySelector('#division').addEventListener('click', onClickOp);
document.querySelector('#multiple').addEventListener('click', onClickOp);
document.querySelector('#power').addEventListener('click', onClickOp);

document.querySelector('#is').addEventListener('click', showResult);
document.querySelector('#clear').addEventListener('click', Clear);
document.querySelector('#clearEntry').addEventListener('click', ClearEntry);


// 키보드로 값 입력 받기
let crtlStatus = false;
window.addEventListener('keydown', event => {
    console.log(event.key); // key 테스트
    switch(event.key){
        case '1': onKeyDownNumber('1');
            break;
        case '2': onKeyDownNumber('2');
            break;
        case '3': onKeyDownNumber('3');
            break;
        case '4': onKeyDownNumber('4');
            break;
        case '5': onKeyDownNumber('5');
            break;
        case '6': onKeyDownNumber('6');
            break;
        case '7': onKeyDownNumber('7');
            break;
        case '8': onKeyDownNumber('8');
            break;
        case '9': onKeyDownNumber('9');
            break;
        case '0': onKeyDownNumber('0');
            break;
        case '+': onKeyDownOp('+');
            break;
        case '-': onKeyDownOp('-');
            break;
        case '*': onKeyDownOp('x');
            break;
        case '/': onKeyDownOp('/');
            break;
        case '^': onKeyDownOp('^');
            break;
        case 'Enter': showResult();
            break;
        case 'Control': crtlStatus = true;
            break;
        case 'Backspace': crtlStatus?Clear():ClearEntry();
            break;
    }
})
// crtl 키 동시 입력 지원을 위한 코드
window.addEventListener("keyup", event => {
    crtlStatus = false;
});