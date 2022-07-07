let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = 'green'; // 색깔
// ctx.fillRect(10,10,100,100); // 10, 10 좌표에 100 x 100 크기의 네모를 생성함

let img2 = new Image();
img2.src = 'starbucks_logo.png';

let dino = {
    x : 10,
    y : 200,
    width: 50,
    height: 50,
    draw(){
        // ctx.fillStyle = 'green'; // 색깔
        // ctx.fillRect(this.x, this.y, this.width, this.height); // 10, 10 좌표에 100 x 100 크기의 네모를 생성함
        ctx.drawImage(img2, this.x-25, this.y-25);
    }
}

let img1 = new Image();
img1.src = 'reserve_store_medal_front.png';

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        // ctx.fillStyle = 'red'; // 색깔
        // ctx.fillRect(this.x, this.y, this.width, this.height); // 10, 10 좌표에 100 x 100 크기의 네모를 생성함
        ctx.drawImage(img1, this.x-145, this.y-100);
    }
}

let cactus = new Cactus();
cactus.draw();

let timer = 0;
let cactuses = [];
let jumpTimer = 0;
let jumping = false;
let anmtn;

function animation(){
    anmtn = requestAnimationFrame(animation);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    if(timer % 120 === 0){
        let cactus = new Cactus();
        cactuses.push(cactus);
    }

    cactuses.forEach((a, i, o)=>{
        if(a.x < 0) {
            o.splice(i, 1);
        }
        a.x-=2;
        isCollisionCheck(dino, a);
        a.draw();
    });
    dino.draw();

    if(jumping) {dino.y-=2; jumpTimer++;}
    if(jumpTimer > 50){jumping = false;}
    if(!jumping) {if(dino.y < 200) dino.y+=2; else jumpTimer = 0}

}
animation();

// 충돌확인

function isCollisionCheck(dino, cactus){
    let xDistance = cactus.x - (dino.x + dino.width);
    let yDistance = cactus.y - (dino.y + dino.height);
    if(xDistance < 0 && yDistance < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(anmtn);
    }
}

document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jumping = true;
    }
})