function Person(img, speed) {
    this.img = img;
    //center of the image
    this.x = this.randomX();
    this.y = this.randomY();
    var rand = Math.random() + .25;
    this.width = 106.75 * rand;
    this.height = 136.75 * rand;
    this.magnitude = speed;
    this.killed = false;
}
Person.prototype.draw = function(ctx) {
    if (!this.killed) {
        ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }
}
Person.prototype.setTarget = function(targX, targY) {
    diffx = Math.abs(this.x - targX);
    diffy = Math.abs(this.y - targY);

    angle = Math.atan2(diffy, diffx);

    incx = this.magnitude * Math.cos(angle);
    incy = this.magnitude * Math.sin(angle);


    incx = targX < this.x ? -incx : incx;
    incy = targY < this.y ? -incy : incy;

    incx = diffx < 5 ? 0 : incx;
    incy = diffy < 5 ? 0 : incy;

    if (this.x - this.width / 2 - incx < 0 && targX <= this.x || this.x + this.width / 2 + incx > window.innerWidth && targX >= window.innerWidth-5) {
        incx = 0;
    }
    if (this.y - this.height / 2 - incy < 0 && targY <= this.y || this.y + this.height / 2 + incy > window.innerHeight && targY >= window.innerHeight-5) {
        incy = 0;
    }
    this.x += incx;
    this.y += incy;
}
Person.prototype.runAwayFrom = function(targX, targY) {
    diffx = Math.abs(this.x - targX);
    diffy = Math.abs(this.y - targY);

    angle = Math.atan2(diffy, diffx);

    incx = this.magnitude * Math.cos(angle);
    incy = this.magnitude * Math.sin(angle);


    incx = targX < this.x ? -incx : incx;
    incy = targY < this.y ? -incy : incy;

    incx = diffx < 5 ? 0 : incx;
    incy = diffy < 5 ? 0 : incy;

    if (this.x - this.width / 2 - incx < 0 || this.x + this.width / 2 + incx > window.innerWidth) {
        incx = 0;
    }
    if (this.y - this.height / 2 - incy < 0 || this.y + this.height / 2 + incy > window.innerHeight) {
        incy = 0;
    }
    this.x -= incx;
    this.y -= incy;
}

Person.prototype.intersect = function(person) {
    //compare it to person.x and person.y
    return (this.x - this.width / 2 < person.x && this.x + this.width / 2 > person.x && this.y - this.height / 2 < person.y && this.y + this.height / 2 > person.y);
}
Person.prototype.kill = function() {
    this.killed = true;
}
Person.prototype.reborn = function(ctx) {
    this.killed = false;
    this.x = this.randomX();
    this.y = this.randomY();
    var rand = Math.random() + .25;
    this.width = 106.75 * rand;
    this.height = 136.75 * rand;
    this.draw(ctx);
}
Person.prototype.grow = function() {
    this.width += 5;
    this.height += 5;
}
Person.prototype.size = function() {
    return this.width * this.height;
}
Person.prototype.randomX = function() {
    return Math.random() * (window.innerWidth - 100 - 100) + 100;
}

Person.prototype.randomY = function() {
    return Math.random() * (window.innerHeight - 100 - 100) + 100;
}
