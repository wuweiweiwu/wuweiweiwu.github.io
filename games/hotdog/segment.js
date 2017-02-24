function Segment(src, prev, x, y, w, h) {
    this.img = new Image();
    this.img.src = src;
    this.prev = prev;
    this.x = x;
    this.y = y;
    if (w < h)
        ratio = 128 / w;
    else
        ratio = 128 / h;
    this.width = w * ratio;
    this.height = h * ratio;
    this.magnitude = 3;
}
Segment.prototype.draw = function(ctx) {
    ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

}
//update x y towards the previous segments location
Segment.prototype.update = function(x, y) {
    if (this.prev == null) {
        targX = x;
        targY = y;
    } else {
        targX = this.prev.x;
        targY = this.prev.y;
    }

    diffx = Math.abs(this.x - targX);
    diffy = Math.abs(this.y - targY);

    angle = Math.atan2(diffy, diffx);
    console.log(angle);

    incx = this.magnitude * Math.cos(angle);
    incy = this.magnitude * Math.sin(angle);


    incx = targX < this.x ? -incx : incx;
    incy = targY < this.y ? -incy : incy;

    incx = diffx < 5 ? 0 : incx;
    incy = diffy < 5 ? 0 : incy;

    // if (this.x - this.width / 2 - incx < 0 && targX <= this.x || this.x + this.width / 2 + incx > window.innerWidth && targX >= window.innerWidth - 5) {
    //     incx = 0;
    // }
    // if (this.y - this.height / 2 - incy < 0 && targY <= this.y || this.y + this.height / 2 + incy > window.innerHeight && targY >= window.innerHeight - 5) {
    //     incy = 0;
    // }
    this.x += incx;
    this.y += incy;
}
