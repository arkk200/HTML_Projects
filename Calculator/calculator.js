let num;
let res = '';
let count = 0;
let value = [];
let op = [];
let setInitial = false;

const onClickNumber = (event) => () => {
    if(op[count]) {count++;}
    if(setInitial) {value = []; res = ''; setInitial = false;}
    if(value[count] == undefined) {value[count] = '';} // value[count]가 undefined이면 ''값으로 초기화
    if(value[count] === 0) res = res.slice(0, -1); // value[count]가 0일 때 값이 입력 되면 result 뒤에 0 제거
    // 0이 입력된다면 화면에 0 하나만 표시한다.
    if(!value[count] && event == 0) { value[count] = 0; res += 0; result.value = res; return;}
    value[count] += event;
    res += event;
    result.value = res;
};
const onKeyDownNumber = (event) => {
    if(op[count]) {count++;}
    if(setInitial) {value = []; res = ''; setInitial = false;}
    if(value[count] == undefined) {value[count] = '';} // value[count]가 undefined이면 ''값으로 초기화
    if(value[count] === 0) res = res.slice(0, -1); // value[count]가 0일 때 값이 입력 되면 result 뒤에 0 제거
    // 0이 입력된다면 화면에 0 하나만 표시한다.
    if(!value[count] && event == 0) { value[count] = 0; res += 0; result.value = res; return;}
    value[count] += event;
    res += event;
    result.value = res;
};
const onClickCal = (event) => () => {
    if(value[count] || value[count] === 0){
        if(!!op[count]) res = res.slice(0, -1);
        op[count] = event;
        res += event;
        result.value = res;
        setInitial = false;
    }
};
const onKeyDownCal = (event) => {
    if(value[count] || value[count] === 0){
        if(!!op[count]) res = res.slice(0, -1);
        op[count] = event;
        res += event;
        result.value = res;
        setInitial = false;
    }
};
const Clear = () => {
    num = 0;
    res = '';
    count = 0;
    value = [];
    op = [];
    result.value = '';
};

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

const showResult = () => {
    if(!op[count] && (value[count] || value[count] === 0)){
        console.log(value);
        console.log(op);
        for(let i = 0; op[i]; i++){
            if(op[i] == '*'){
                console.log(value[i], op[i], value[i+1]);
                num = parseFloat(value[i]) * parseFloat(value[i+1]); // value : [1, 2, 3, 4] // op : ['*', '*', '*']
                op.splice(i, 1);
                value.splice(i, 2); // value : [3, 4], ['*', '*']
                value.splice(i, 0, num); // value : [2, 3, 4], ['*', '*']
                i--;
            }else if(op[i] == '/'){
                console.log(value[i], op[i], value[i+1]);
                num = parseFloat(value[i]) / parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        for(let i = 0; op[i]; i++){
            if(op[i] == '+'){
                // console.log(value[i], op[i], value[i+1]); // + 연산 테스트
                num = parseFloat(value[i]) + parseFloat(value[i+1]); // value : [1, 2, 3, 4] // op : ['*', '*', '*']
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }else if(op[i] == '-'){
                // console.log(value[i], op[i], value[i+1]); // - 연산 테스트
                num = parseFloat(value[i]) - parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        result.value = value[0];
        res = String(value[0]);
        num = 0;
        count = 0;
        op = [];
        setInitial = true;
    }
}

document.querySelector('#one').addEventListener('click', onClickNumber('1'));
document.querySelector('#two').addEventListener('click', onClickNumber('2'));
document.querySelector('#three').addEventListener('click', onClickNumber('3'));
document.querySelector('#four').addEventListener('click', onClickNumber('4'));
document.querySelector('#five').addEventListener('click', onClickNumber('5'));
document.querySelector('#six').addEventListener('click', onClickNumber('6'));
document.querySelector('#seven').addEventListener('click', onClickNumber('7'));
document.querySelector('#eight').addEventListener('click', onClickNumber('8'));
document.querySelector('#nine').addEventListener('click', onClickNumber('9'));
document.querySelector('#zero').addEventListener('click', onClickNumber('0'));
document.querySelector('#doubleZero').addEventListener('click', onClickNumber('00'));
document.querySelector('#decimalPoint').addEventListener('click', onClickNumber('.'));

document.querySelector('#plus').addEventListener('click', onClickCal('+'));
document.querySelector('#minus').addEventListener('click', onClickCal('-'));
document.querySelector('#division').addEventListener('click', onClickCal('/'));
document.querySelector('#multiple').addEventListener('click', onClickCal('*'));

document.querySelector('#is').addEventListener('click', showResult);
document.querySelector('#clear').addEventListener('click', Clear);
document.querySelector('#clearEntry').addEventListener('click', ClearEntry);

let crtlStatus = false;
window.addEventListener('keydown', event => {
    // console.log(event.key); // key 테스트
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
        case '+': onKeyDownCal('+');
            break;
        case '-': onKeyDownCal('-');
            break;
        case '*': onKeyDownCal('*');
            break;
        case '/': onKeyDownCal('/');
            break;
        case 'Enter': showResult();
            break;
        case 'Control': crtlStatus = true;
            break;
        case 'Backspace': crtlStatus?Clear():ClearEntry();
            break;
    }
})
window.addEventListener("keyup", event => {
    crtlStatus = false;
});