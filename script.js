let canvas = document.getElementById('mycanvas')
let pen = canvas.getContext('2d');
let gameOver = false;
let enemyImg = new Image()
enemyImg.src = "assets/enemy.jpg"

let playerImg = new Image()
playerImg.src = "assets/player.jpg"

let gameH = canvas.height
let gameW = canvas.width

let enemy1 = {
    x: 150,
    y: 150,
    w: 60,
    h: 60,
    speed: 5
}

let enemy2 = {
    x: 325,
    y: 325,
    w: 60,
    h: 60,
    speed: -7
}

let enemy3 = {
    x: 600,
    y: 250,
    w: 60,
    h: 60,
    speed: 10
}

let player = {
    x: 0,
    y: gameH / 2 - 30,
    w: 60,
    h: 60,
    speed: 5,
    isMoving: false
}

canvas.addEventListener('mousedown', function () {
    player.isMoving = true;
})

canvas.addEventListener('mouseup', function () {
    player.isMoving = false;
})

function draw() {
    if (!gameOver) {
        pen.clearRect(0, 0, gameW, gameW);
        pen.drawImage(enemyImg, enemy1.x, enemy1.y, enemy1.w, enemy1.h);
        pen.drawImage(enemyImg, enemy2.x, enemy2.y, enemy2.w, enemy2.h);pen.drawImage(enemyImg, enemy3.x, enemy3.y, enemy3.w, enemy3.h);
        pen.drawImage(playerImg, player.x, player.y, player.w, player.h);
    }

}

function isColliding(r1, r2) {
    let side = r1.w;
    if (Math.abs(r1.x - r2.x) <= side && Math.abs(r1.y - r2.y) <= side) {
        return true
    }
    return false;
}

function update() {

    if (!gameOver) {
        enemy1.y += enemy1.speed;
        enemy2.y += enemy2.speed;
        enemy3.y += enemy3.speed;

        if (enemy1.y >= gameH - enemy1.h || enemy1.y <= 0) {
            enemy1.speed *= -1;
        }
        if (enemy2.y >= gameH - enemy2.h || enemy2.y <= 0) {
            enemy2.speed *= -1;
        } if (enemy3.y >= gameH - enemy3.h || enemy3.y <= 0) {
            enemy3.speed *= -1;
        }

        if (player.isMoving == true) {
            player.x += player.speed;
        }

        if (isColliding(player, enemy1)) {
            alert('Game Over! Please refresh the page to play again.')
            gameOver = true;
        }
        if (isColliding(player, enemy2)) {
            alert('Game Over! Please refresh the page to play again.')
            gameOver = true;
        }if (isColliding(player, enemy3)) {
            alert('Game Over! Please refresh the page to play again.')
            gameOver = true;
        }

        if (player.x > gameW - player.w) {
            alert('You Won the game! Please refresh the page to play again.')
            gameOver = true;
        }
    }
}


function render() {
    draw()
    update()
    window.requestAnimationFrame(render);
}
render()
