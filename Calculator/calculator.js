const onClickNumber = (event) => () => {
    if(op[count]) {count++;}
    if(setInitial) {value = []; $result.value = ''; setInitial = false;}
    if(value[count] == undefined) { value[count] = ''; }
    value[count] += event;
    $result.value += event;
};
const onClickCal = (event) => () => {
    if(value[count]){
        op[count] = event;
        $result.value += event;
        setInitial = false;
    }
};
const Clear = () => {
    num = 0;
    count = 0;
    value = [];
    op = [];
    $result.value = '';
};

const showResult = () => {
    if(!op[count] && value[count]){
        console.log(value);
        console.log(op);
        console.log(!!op[0]);
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
                console.log(value[i], op[i], value[i+1]);
                num = parseFloat(value[i]) + parseFloat(value[i+1]); // value : [1, 2, 3, 4] // op : ['*', '*', '*']
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }else if(op[i] == '-'){
                console.log(value[i], op[i], value[i+1]);
                num = parseFloat(value[i]) - parseFloat(value[i+1]);
                op.splice(i, 1);
                value.splice(i, 2);
                value.splice(i, 0, num);
                i--;
            }
        }
        $result.value = value[0];
        console.log(value[0]);
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

document.querySelector('#plus').addEventListener('click', onClickCal('+'));
document.querySelector('#minus').addEventListener('click', onClickCal('-'));
document.querySelector('#division').addEventListener('click', onClickCal('/'));
document.querySelector('#multiple').addEventListener('click', onClickCal('*'));

document.querySelector('#is').addEventListener('click', showResult);
document.querySelector('#clear').addEventListener('click', Clear);
$result = document.querySelector('#result');
$is = document.querySelector('#is');

let num;
let count = 0;
let value = [];
let op = [];
let result;
let setInitial = false;
$is.addEventListener('click', showResult);