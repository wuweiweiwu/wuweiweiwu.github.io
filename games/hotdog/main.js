function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    ctx.globalCompositeOperation = 'destination-over';
    mouseX = window.innerWidth/2;
    mouseY = window.innerHeight/2;

    document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;

    });

    head_width = 581;
    head_height = 930;
    segment_width = 701;
    segment_height = 501;
    head =  new Segment('img/head.png', null, window.innerWidth /2, window.innerHeight/2, head_width,head_height);
    segment = new Segment('img/middle.png', head, window.innerWidth / 2 - head_width, window.innerHeight/2, segment_width, segment_height);


    window.requestAnimationFrame(draw);
}


function draw() {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

    head.update(mouseX,mouseY);
    head.draw(ctx);
    // segment.update(0,0);
    // segment.draw(ctx);

    window.requestAnimationFrame(draw);
}
