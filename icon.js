function Icon(src, x, y, w, h, target, caption, cw, ch) {
  this.img = new Image();
  this.img.src = src;
  var ratio;
  if (w < h)
    ratio = 128 / w;
  else
    ratio = 128 / h;
  this.icon_width = w * ratio;
  this.icon_height = h * ratio;
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

  // console.log("w:" + display_width);
  // console.log("h:" + display_height);
  //  ctx.globalAlpha = 0.5;
  ctx.drawImage(this.img, this.x - this.icon_width / 2, this.y - this.icon_height / 2, this.icon_width, this.icon_height);
  //ctx.globalAlpha = 1;
  ctx.drawImage(this.caption, this.x - this.caption_width / 2, this.y + this.icon_height / 2 + this.caption_height / 2, this.caption_width, this.caption_height);
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
// Icon.prototype.mouseOver = function(context, x, y) {
//     if (x < this.x + this.icon_width / 2 && x > this.x - this.icon_width / 2 && y < this.y + this.icon_height / 2 && this.y - this.icon_height / 2) {
//         // var centerX = window.innerWidth / 2;
//         // var centerY = window.innerHeight / 2;
//         // var radius = 70;
//         //
//         // context.beginPath();
//         // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//         // context.fillStyle = 'green';
//         // context.fill();
//         // context.lineWidth = 5;
//         // context.strokeStyle = '#003300';
//         // context.stroke();
//
//         ctx.globalAlpha = 1;
//         ctx.drawImage(this.img, this.x - this.icon_width / 2, this.y - this.icon_height / 2, this.icon_width, this.icon_height);
//
//     }
// }
