const player = document.getElementById("player");
const step = 20;
const obstaculos = document.querySelectorAll(".obstaculo");
const goal = document.querySelector(".goal");

let gameover = false;
let posicaoX = 180;
let posicaoY = 180;

document.addEventListener("keydown", (event) => {
    if (gameover) return;
    let newX= posicaoX;
    let newY= posicaoY;
    if (event.key === "ArrowUp" && posicaoY > 0) newY -= step;
    if (event.key === "ArrowDown" && posicaoY < 360) newY += step;
    if (event.key === "ArrowLeft" && posicaoX > 0) newX -= step;
    if (event.key === "ArrowRight" && posicaoX < 360) newX += step;
    if (!checkCollision (newX, newY)) {
        posicaoX = newX;
        posicaoY = newY;
        player.style.top = posicaoY + "px";
        player.style.left = posicaoX + "px";
    }

checkWin ()


})


function checkCollision(x, y) {
    for (let obstaculo of obstaculos) {
        let obsX = obstaculo.offsetLeft;
        let obsY = obstaculo.offsetTop;
        if (x < obsX + 40 && x + 40 > obsX && y < obsY + 40 && y + 40 > obsY) {
        return true;

        }
        
    }
    return false;
    
}

function checkWin () {
    let goalX= goal.offsetLeft;
    let goalY= goal.offsetTop;
    if (posicaoX < goalX + 40 && posicaoX + 40 > goalX && posicaoY < goalY +40 && posicaoY +40 > goalY) {
        alert("Parabéns, você venceu 🎉");
        gameover = true;
    } 
}







