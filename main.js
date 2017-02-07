var c_top = new Image();
var c_bottom = new Image();

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    ctx.globalCompositeOperation = 'destination-over';

    taco_list = [];

    document.addEventListener("click", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        taco = new Taco(mouseX, mouseY);
        taco_list.push(taco);
    });

    c_top.src = 'img/christina_top.png';
    top_width = 237;
    top_height = 266;
    c_bottom.src = 'img/christina_bottom.png';
    bottom_width = 190;
    bottom_height = 77;
    window.requestAnimationFrame(draw);
}
var offset = 0;
var offsetMax = 20;
var direction = 1;

function draw() {
    score = 0;
    for (i = 0; i < taco_list.length; i++) {
        if (taco_list[i].eaten) {
            score++;
        }
    }

    document.getElementById('score').innerHTML = score;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (i = 0; i < taco_list.length; i++) {
        taco_list[i].goTo(ctx, window.innerWidth / 2, window.innerHeight / 2);
    }
    ctx.drawImage(c_top, window.innerWidth / 2 - top_width / 2, window.innerHeight / 2 - top_height, top_width, top_height);
    if (direction == 1 && offset > offsetMax) {
        direction = -direction;
    } else if (direction == -1 && offset < -5) {
        direction = -direction;
    }
    offset += direction;
    ctx.drawImage(c_bottom, window.innerWidth / 2 - bottom_width / 2, window.innerHeight / 2 + offset, bottom_width, bottom_height);

    window.requestAnimationFrame(draw);
}
