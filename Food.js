class Food {
    constructor(){
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
    }

    setRandomPosition() {
        this.x = Math.round(Math.random() * GAME_SIZE % (GAME_SIZE / this.size));
        this.y = Math.round(Math.random() * GAME_SIZE % (GAME_SIZE / this.size));
        console.log(this.x, this.y);
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}