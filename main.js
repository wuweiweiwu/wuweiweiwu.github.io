function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
    showLines = 0;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    ctx.globalCompositeOperation = 'destination-over';

    document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    document.addEventListener("click", function() {
        showLines = (showLines + 1) % 2;
    });

    trump = new Person('img/trump.png', 1);
    carson = new Person('img/carson.png', 2);
    hillary = new Person('img/hillary.png', 3);
    pence = new Person('img/pence.png', 4);


    me = new Person('img/bernie.png', 5);
    // me.grow();
    me.grow();
    me.grow();
    pence.grow();
    hillary.grow();

    bad_peeps = [trump, carson, pence, hillary, me];
    window.requestAnimationFrame(updateCanvas);
}


function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function drawLine(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function pickTargets() {
    for (var i = 0; i < bad_peeps.length - 1; i++) {
        var minDist = Number.MAX_SAFE_INTEGER;
        var target = 0;
        for (var j = 0; j < bad_peeps.length; j++) {

            if (distance(bad_peeps[i], bad_peeps[j]) < minDist && bad_peeps[i].size() > bad_peeps[j].size() && i != j && !bad_peeps[i].killed && !bad_peeps[j].killed) {
                target = j;
                minDist = distance(bad_peeps[i], bad_peeps[j])
            }
        }

        if (minDist != Number.MAX_SAFE_INTEGER) {
            //set target here
            bad_peeps[i].setTarget(bad_peeps[target].x, bad_peeps[target].y);
            drawLine(bad_peeps[i].x, bad_peeps[i].y, bad_peeps[target].x, bad_peeps[target].y, 'rgb(59, 255, 0)');

        } else {
            //everyone is >= you run away
            var closest = Number.MAX_SAFE_INTEGER;
            var enemy = 0;
            for( var x=0;x< bad_peeps.length;x++){
              if (i!=x && bad_peeps[i].size() < bad_peeps[x].size() && distance(bad_peeps[i],bad_peeps[x]) < closest && !bad_peeps[i].killed && !bad_peeps[x].killed){
                closest = distance(bad_peeps[i],bad_peeps[x]);
                enemy = x;
              }
            }

            if (closest != Number.MAX_SAFE_INTEGER){
              bad_peeps[i].runAwayFrom(bad_peeps[enemy].x,bad_peeps[enemy].y);
              drawLine(bad_peeps[i].x, bad_peeps[i].y, bad_peeps[enemy].x, bad_peeps[enemy].y, 'rgb(255, 0, 0)');
            }

        }
    }
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < bad_peeps.length; i++) {
        for (j = 0; j < bad_peeps.length; j++) {
            if (bad_peeps[i].intersect(bad_peeps[j]) && !bad_peeps[j].killed && !bad_peeps[i].killed && bad_peeps[i].size() > bad_peeps[j].size()) {
                bad_peeps[j].kill();
                bad_peeps[i].grow();
            }
        }
    }

    for (i = 0; i < bad_peeps.length; i++) {
        bad_peeps[i].draw(ctx);
    }

    if (!me.killed) {
        me.setTarget(mouseX, mouseY);
        drawLine(me.x, me.y, mouseX, mouseY, 'rgb(173, 48, 208)');
    }

    pickTargets();

    //reborn them
    // for (i = 0; i < bad_peeps.length; i++) {
    //     if (bad_peeps[i].killed) {
    //         bad_peeps[i].reborn(ctx);
    //         break;
    //     }
    // }

    window.requestAnimationFrame(updateCanvas);
}
