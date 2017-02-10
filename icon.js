function Icon(src, x, y, w, h, target, caption, cw, ch) {
    this.img = new Image();
    this.img.src = src;
    this.icon_width = 0;
    this.icon_height = 0;
    this.icon_width = w;
    this.icon_height = h;
    this.x = x;
    this.y = y;
    this.target = target;
    this.isOpened = false;
    this.caption = new Image();
    this.caption.src = caption;
    this.caption_width = cw;
    this.caption_height = ch;
}
Icon.prototype.draw = function(ctx) {
    //scale to 128 width
    var ratio;
    if (this.icon_width < this.icon_height)
        ratio = 128 / this.icon_width;
    else
        ratio = 128 / this.icon_height;

    var display_width = this.icon_width * ratio;
    var display_height = this.icon_height * ratio;
    // console.log("w:" + display_width);
    // console.log("h:" + display_height);
    ctx.drawImage(this.img, this.x - display_width / 2, this.y - display_height / 2, display_width, display_height);
    ctx.drawImage(this.caption, this.x - this.caption_width / 2, this.y + display_height / 2 + this.caption_height / 2, this.caption_width, this.caption_height);
}

//if its on it then go
Icon.prototype.goTo = function(x, y, w, h) {
    if (x + w / 2 > this.x && x - w / 2 < this.x && y + h / 2 > this.y && y - h / 2 < this.y && !this.isOpened) {
        window.location.href = this.target;
        this.isOpened = true;
    }
}
Icon.prototype.click = function(x, y) {
    if (x < this.x + this.icon_width / 2 && x > this.x - this.icon_width / 2 && y < this.y + this.icon_height / 2 && this.y - this.icon_height / 2) {
        window.location.href = this.target;
    }
}
