function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
    showLines = 0;
    score = 0;
    died = 0;

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

function drawLine(x1, y1, x2, y2, color, dash) {
    ctx.setLineDash([5, 3]); /*dashes are 5px and spaces are 3px*/
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function pickTargets() {
    for (var i = 0; i < bad_peeps.length - 1; i++) {
        //run away if within 500 someone is bigger than you
        var minDist = 500;
        var danger = 0;
        for (var j = 0; j < bad_peeps.length; j++) {

            if (distance(bad_peeps[i], bad_peeps[j]) < minDist && bad_peeps[i].size() < bad_peeps[j].size() && i != j && !bad_peeps[i].killed && !bad_peeps[j].killed) {
                danger = j;
                minDist = distance(bad_peeps[i], bad_peeps[j])
            }
        }

        if (minDist < 500) {
            //set target here
            bad_peeps[i].runAwayFrom(bad_peeps[danger].x, bad_peeps[danger].y);
            if (showLines) drawLine(bad_peeps[i].x, bad_peeps[i].y, bad_peeps[danger].x, bad_peeps[danger].y, 'rgb(255, 0, 0)');

        } else {
            //not in danger-- choose target
            var minDist = Number.MAX_SAFE_INTEGER;
            var target = 0;
            for (var x = 0; x < bad_peeps.length; x++) {
                if (i != x && bad_peeps[i].size() > bad_peeps[x].size() && distance(bad_peeps[i], bad_peeps[x]) < minDist && !bad_peeps[i].killed && !bad_peeps[x].killed) {
                    minDist = distance(bad_peeps[i], bad_peeps[x]);
                    target = x;
                }
            }

            if (minDist < Number.MAX_SAFE_INTEGER) {
                bad_peeps[i].setTarget(bad_peeps[target].x, bad_peeps[target].y);
                if (showLines) drawLine(bad_peeps[i].x, bad_peeps[i].y, bad_peeps[target].x, bad_peeps[target].y, 'rgb(0, 255, 0)');
            }else{//no targets cuz youre smallest
              var close = closest(bad_peeps[i]);
              bad_peeps[i].runAwayFrom(bad_peeps[close].x, bad_peeps[close].y);
              if (showLines) drawLine(bad_peeps[i].x, bad_peeps[i].y, bad_peeps[close].x, bad_peeps[close].y, 'rgb(255, 0, 0)');
            }

        }
    }
}
function closest(person){
  var closest = Number.MAX_SAFE_INTEGER;
  var index = 0;
  for (var i = 0; i < bad_peeps.length; i++) {
    if(bad_peeps[i] != person && distance(bad_peeps[i], person) < closest){
      closest = distance(bad_peeps[i], person);
      index = i;
    }
  }
  return index;
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateScore();
    for (i = 0; i < bad_peeps.length; i++) {
        for (j = 0; j < bad_peeps.length; j++) {
            if (bad_peeps[i].intersect(bad_peeps[j]) && !bad_peeps[j].killed && !bad_peeps[i].killed && bad_peeps[i].size() > bad_peeps[j].size()) {
              if(bad_peeps[i] == me){
                score ++;
              }
              if(bad_peeps[j] == me){
                died ++;
              }
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
        if (showLines) drawLine(me.x, me.y, mouseX, mouseY, 'rgb(173, 48, 208)');
    }

    pickTargets();

    //reborn them
    for (i = 0; i < bad_peeps.length; i++) {
        if (bad_peeps[i].killed) {
            bad_peeps[i].reborn(ctx);
            break;
        }
    }

    window.requestAnimationFrame(updateCanvas);
}
function updateScore(){
  // document.getElementById('score').innerHTML = score;
  // document.getElementById('died').innerHTML = died;
}
