function Taco(x, y) {
    this.img = new Image();
    this.img.src = 'img/taco.png';
    this.width = 100;
    this.height = 78;
    this.x = x;
    this.y = y;
    this.magnitude = 7;
    this.eaten = false;
}
Taco.prototype.goTo = function(ctx, targX, targY) {

    diffx = Math.abs(this.x - targX);
    diffy = Math.abs(this.y - targY);
    angle = Math.atan2(diffy, diffx);
    incx = this.magnitude * Math.cos(angle);
    incy = this.magnitude * Math.sin(angle);
    incx = targX < this.x ? -incx : incx;
    incy = targY < this.y ? -incy : incy;
    this.x += incx;
    this.y += incy;

    if (diffx < 5 && diffy < 5)
        this.eat();

    if (!this.eaten)
        ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
}
Taco.prototype.eat = function() {
    this.eaten = true;
}
