function Person(src, x, y, speed, color) {
    this.img = new Image();
    this.img.src = src;
    //center of the image
    this.x = x;
    this.y = y;
    this.targetX = 0;
    this.targetY = 0;
    this.width = 106.75;
    this.height = 136.75;
    this.magnitude = speed;
    this.lineColor = color;
}
Person.prototype.draw = function(ctx, showLines) {
    ctx.drawImage(this.img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    if (showLines){
      ctx.setLineDash([5, 15]);
      ctx.strokeStyle = this.lineColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x , this.y);
      ctx.lineTo(this.targetX, this.targetY);
      ctx.stroke();
    }
}

Person.prototype.updateTarget = function(targetX, targetY) {
    this.targetX = targetX;
    this.targetY = targetY;

    diffx = Math.abs(this.x - this.targetX);
    diffy = Math.abs(this.y - this.targetY);

    angle = Math.atan2(diffy, diffx);

    incx = this.magnitude * Math.cos(angle);
    incy = this.magnitude * Math.sin(angle);

    if (diffx > 5) {
        this.x += this.targetX < this.x ? -incx : incx;
    }
    if (diffy > 5) {
        this.y += this.targetY < this.y ? -incy : incy;
    }
}
