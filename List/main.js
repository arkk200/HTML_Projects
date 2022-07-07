let list = [];
let word = '';

const $btn1 = document.getElementById('btn1');
const $input = document.querySelector('input');
const $list = document.getElementById('list');
const $btns = document.getElementsByClassName('btns');

function AddToList(){
    if(word !== ''){
        list.push(`<li><p>${$input.value}</p><button class="btns">x</button></li>`);
        console.log(list);
        $list.innerHTML = list.join('');
        $input.value = '';
        word = '';
    }
}

function onInput(event){
    word = event.target.value;
}

$input.addEventListener('input', onInput);

$btn1.addEventListener('click', AddToList);

