class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.blockSize = SQUARE_SIZE;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        console.log(this.blocs);
    }

    addBlock(x, y) {
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    moveHead() {
        const head = this.blocks[0];
        switch (currentDirection) {
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            case 'up':
                head.y -= 1;
            break;
            case 'down':
                head.y += 1;
            default:
                break;
        }
        head.teleportIfOutOfMap();
    }

    calculateNewBlockPosition() {
        let {x, y} = head;
        switch (currentDirection) {
            case 'left':
                x -= 1;
            break;
            case 'right':
                x += 1;
            break;
            case 'up':
                y -= 1;
            break;
            case 'down':
                y += 1;
            default:
                break;
        }
    }

    eat() {
        const head = this.blocks[0];
        if (head.x === food.x && head.y === food.y) {
            food.setRandomPosition();
            const {x, y} = this.calculateNewBlockPosition();
            this.addBlock(x, y);
        }
    }

    update() {
        for (const block of this.blocks) {
            block.draw();
        }
        this.moveHead();
        this.eat();
    }
}