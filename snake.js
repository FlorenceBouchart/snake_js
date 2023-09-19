class Snake {
    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.size = size;
        this.blocks = [];
        this.addBlock(this.x, this.y);
    }

    addBlock(x, y) {
        const block = new Block(x, y, this.blocksize);
        this.blocks.push(block);
    }

    update() {
        for (const block of this.blocks) {
            block.draw();
        }
    }
}