function Sprites(src, width, height, per_row, per_column) {
    this.img = new Image();
    this.img.src = src;
    this.speed = 7;
    this.counter = 0;
    this.current = 0;
    this.per_row = per_row;
    this.per_column = per_column;
    this.width = width;
    this.height = height;
}
Sprites.prototype.updateWalkLeft = function() {
    if (this.counter == this.speed - 1) {
        this.current = (this.current + 1) % per_row;
        this.current += per_row;
    }
    this.counter = (this.counter + 1) % this.speed;
}
Sprites.prototype.updateWalkRight = function() {
    if (this.counter == this.speed - 1) {
        this.current = (this.current + 1) % per_row;
    }
    this.counter = (this.counter + 1) % this.speed;
}
Sprites.prototype.updateStandLeft = function() {
    this.current = 13;
    this.counter = 0;
}
Sprites.prototype.updateStandRight = function() {
    this.current = 12;
    this.counter = 0;
}
Sprites.prototype.draw = function(ctx, x, y) {
    var row = Math.floor(this.current / this.per_row);
    var column = Math.floor(this.current % this.per_row);

    //x and y are center
    var frame_width = this.width / this.per_row;
    var frame_height = this.height / this.per_column;

    ctx.drawImage(this.img, frame_width * column, frame_height * row + 3, frame_width, frame_height - 3, x - frame_width / 2, y - frame_height / 2, frame_width, frame_height);
}
