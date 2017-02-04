function draw() {
  var canvas = document.getElementById('canvas');
  canvas.width = screen.width;
  canvas.height = screen.height;

  if( canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10,10,50,50);

  }
}
