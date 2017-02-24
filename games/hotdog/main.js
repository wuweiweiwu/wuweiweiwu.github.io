function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    ctx.globalCompositeOperation = 'destination-over';
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;

    document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;

    });

    head_width = 161;
    head_height = 258;
    segment_width = 131;
    segment_height = 131;
    end_width = 77;
    end_height = 132;

    segment_list = [];

    head = new Segment('img/head.png', null, window.innerWidth / 2, window.innerHeight / 2, head_width, head_height, 3);
    segment = new Segment('img/middle.png', head, head.leadx, head.leady, segment_width, segment_height, 3);
    segment_list.push(segment);
    tail = new Segment('img/end.png', segment, segment.leadx, segment.leady, end_width, end_height, 3);
    window.requestAnimationFrame(draw);


}


function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    head.update(mouseX, mouseY);
    head.draw(ctx);
    for(i=0;i<segment_list.length;i++){
      segment_list[i].update();
      segment_list[i].draw(ctx);
    }
    tail.update();
    tail.draw(ctx);

    window.requestAnimationFrame(draw);
}
