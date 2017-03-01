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

    food_img = new Image();
    food_img.src = 'img/food.png';
    seg_img = new Image();
    seg_img.src = 'img/middle.png';
    tail_img = new Image();
    tail_img.src = 'img/end.png';
    head_img = new Image();
    head_img.src = 'img/head.png';

    head_img.addEventListener('load', function() {
      document.getElementById('loading').style.visibility = 'hidden';
    }, false);

    head = new Segment(head_img, null, window.innerWidth / 2, window.innerHeight / 2, head_width, head_height, 4);
    segment = new Segment(seg_img, head, head.leadx, head.leady, segment_width, segment_height, 4);
    segment_list.push(segment);
    tail = new Segment(tail_img, segment, segment.leadx, segment.leady, end_width, end_height, 4);

    food_width = 139;
    food_height = 98;
    food = new Food(food_img,food_width, food_height);

    prev_seg_score = 0;
    window.requestAnimationFrame(draw);
}

function intersect(p, f) {
    return (p.x - p.width / 2 < f.x && p.x + p.width / 2 > f.x && p.y - p.height / 2 < f.y && p.y + p.height / 2 > f.y);
}

function addScore() {
    var score = parseInt(document.getElementById('score').innerHTML);
    score++;
    document.getElementById('score').innerHTML = score;
}

function getScore() {
    var score = parseInt(document.getElementById('score').innerHTML);
    if (score == 0) return 1;
    else return score;
}

function addSegment() {
    lastSeg = segment_list[segment_list.length - 1];
    newSeg = new Segment(seg_img, lastSeg, lastSeg.leadx, lastSeg.leady, segment_width, segment_height, 4);
    segment_list.push(newSeg);
    tail.prev = newSeg;
}

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (intersect(head, food)) {
        addScore();
        food = new Food(food_img,food_width, food_height);
    }

    if (getScore() % 2 == 0 && getScore() > prev_seg_score) {
        addSegment();
        prev_seg_score = getScore();
    }

    head.update(mouseX, mouseY);
    head.draw(ctx);
    for (i = 0; i < segment_list.length; i++) {
        segment_list[i].update();
        segment_list[i].draw(ctx);
    }
    tail.update();
    tail.draw(ctx);

    food.draw(ctx);

    window.requestAnimationFrame(draw);
}
