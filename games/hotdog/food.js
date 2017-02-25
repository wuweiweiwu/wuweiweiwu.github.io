function Food(src,w,h){
    this.img = new Image();
    this.img.src = src;
    this.x = Math.random()*window.innerWidth;
    this.y = Math.random()*window.innerHeight;
    this.width =w;
    this.height =h;
}
Food.prototype.draw = function(ctx){
  ctx.drawImage(this.img, this.x-this.width/2,this.y-this.height/2, this.width,this.height);
}
