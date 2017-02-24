function Segment(src, prev, x, y, w, h, speed) {
    this.img = new Image();
    this.img.src = src;
    this.prev = prev;
    this.x = x;
    this.y = y;
    // if (w < h)
    //     ratio = 128 / w;
    // else
    //     ratio = 128 / h;
    this.width = w;
    this.height = h;
    this.magnitude = speed;
    this.rotation = 0;
    this.leadx = this.x + 50;
    this.leady = this.y;
    this.leadlength = 50;
    this.error = 30;
}
Segment.prototype.draw = function(ctx) {

    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(this.img, - this.width / 2,- this.height / 2, this.width, this.height);
    ctx.restore();

    px = this.leadlength * Math.cos(this.rotation);
    py = this.leadlength * Math.sin(this.rotation);

    this.leadx = this.x + px;
    this.leady = this.y + py;

    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.leadx,this.leady);
    ctx.stroke();
}
//update x y towards the previous segments location
Segment.prototype.update = function(x, y) {
    if (this.prev == null) {
        targX = x;
        targY = y;
    } else {
        targX = this.prev.leadx;
        targY = this.prev.leady;
    }

    var diffx = this.x - targX;
    var diffy = this.y - targY;

    var rotationRadian = Math.atan2(diffy, diffx);
    rotationRadian += rotationRadian < 0 ? 2*Math.PI : 0;
    var rotationDegree = rotationRadian*(180/Math.PI);
  //  rotationDegree += rotationDegree < 0 ? 360 : 0;
    // console.log("radian: "+rotationRadian);
    // console.log("angle: "+rotationDegree);

    this.rotation = rotationRadian;

    var incx = this.magnitude * Math.cos(rotationRadian);
    var incy = this.magnitude * Math.sin(rotationRadian);

    incx = Math.abs(diffx) < this.error ? 0 : incx;
    incy = Math.abs(diffy) < this.error ? 0 : incy;

    // if (this.x - this.width / 2 - incx < 0 && targX <= this.x || this.x + this.width / 2 + incx > window.innerWidth && targX >= window.innerWidth - 5) {
    //     incx = 0;
    // }
    // if (this.y - this.height / 2 - incy < 0 && targY <= this.y || this.y + this.height / 2 + incy > window.innerHeight && targY >= window.innerHeight - 5) {
    //     incy = 0;
    // }
    this.x -= incx;
    this.y -= incy;
}
