function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    currentX = 0;
    currentY = 0;
    trumpX = canvas.width / 2;
    trumpY = canvas.height / 2;
    meX = currentX;
    meY = currentY;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        drawTrump();
    };

    ctx.globalCompositeOperation = 'destination-over';


    document.addEventListener("mousemove", function(event) {
        currentX = event.clientX;
        currentY = event.clientY;
    });

    window.requestAnimationFrame(draw);
}

function drawTrump() {
    var img = new Image();
    img.src = 'img/trump.png';
    ctx.drawImage(img, trumpX - img.width / 8, trumpY - img.height / 8, img.width / 4, img.height / 4);
}

function drawMe() {
    var img = new Image();
    img.src = 'img/trump.png';
    ctx.drawImage(img, meX - img.width / 8, meY - img.height / 8, img.width / 4, img.height / 4);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrump();
    drawMe();

    ctx.setLineDash([5, 15]);
    ctx.strokeStyle = "rgb(212, 18, 88)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(trumpX, trumpY);
    ctx.stroke();

    ctx.strokeStyle = "rgb(46, 195, 33)";
    ctx.moveTo(currentX,currentY);
    ctx.lineTo(meX,meY);
    ctx.stroke();

    updateLocation();
    window.requestAnimationFrame(draw);
}

function updateLocation() {
    diffx = Math.abs(currentX-trumpX);
    diffy = Math.abs(currentY-trumpY);

    angle = Math.atan2(diffy, diffx);

    magnitude = 2;
    incx = magnitude * Math.cos(angle);
    incy = magnitude * Math.sin(angle);

    trumpX += currentX < trumpX && trumpX != currentX ? -incx : incx;
    trumpY += currentY < trumpY && trumpY != currentY ? -incy : incy;

    diffx = Math.abs(meX-currentX);
    diffy = Math.abs(meY-currentY);

    angle = Math.atan2(diffy, diffx);

    magnitude = 5;
    incx = magnitude * Math.cos(angle);
    incy = magnitude * Math.sin(angle);

    meX += currentX < meX && meX != currentX ? -incx : incx;
    meY += currentY < meY && meY != currentY ? -incy : incy;

}
