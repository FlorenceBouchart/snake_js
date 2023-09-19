
const GAME_SIZE = 600;
const SQUARE_SIZE = 15;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const food = new Food();
const snake = new Snake(SQUARE_SIZE);

let currentDirection = "down";

function detectKeyPressed() {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowDown':
                currentDirection = "down";
            break;
            case 'ArrowUp':
                currentDirection = 'up';
            break;
            case 'ArrowLeft':
                currentDirection = "left";
            break;
            case 'ArrowRight':
                currentDirection = "right";
            break;
            default:
                break;

        }
        
    })

}

function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE)
}

function update() {
    clearScreen();
    food.draw();
    snake.update();
    setTimeout(update, 150);
}


function start(){
    detectKeyPressed();
    update();
}

start();