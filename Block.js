class Block {
constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
}

draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
}
}