const player = document.getElementById("player");
const step = 20;
const obstaculos = document.querySelectorAll(".obstaculo");
const goal = document.querySelector(".goal");

let gameover = false;
let posicaoX = 180;
let posicaoY = 180;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && posicaoY > 0) posicaoY -= step;
    if (event.key === "ArrowDown" && posicaoY < 360) posicaoY += step;
    if (event.key === "ArrowLeft" && posicaoX > 0) posicaoX -= step;
    if (event.key === "ArrowRight" && posicaoX < 360) posicaoX += step;

    player.style.top = posicaoY + "px";
     player.style.left = posicaoX + "px";


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





