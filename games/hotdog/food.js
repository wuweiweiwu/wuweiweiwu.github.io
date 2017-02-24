function Food(){
    this.x = Math.random()*window.innerWidth;
    this.y = Math.random()*window.innerHeight;
    this.width =10;
    this.height = 10;
}
Food.prototype.draw = function(ctx){
  ctx.fillRect(this.x,this.y, this.width,this.height);
}
