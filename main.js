function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    mouseX = window.innerWidth/2;
    mouseY = window.innerHeight/2;
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

    trump = new Person('img/trump.png', canvas.width / 2, canvas.height / 2, 1, 'rgb(255, 0, 0)', false);
    carson = new Person('img/carson.png', canvas.width / 2, canvas.height / 2, 2, 'rgb(255, 0, 0)', false);
    pence = new Person('img/pence.png', canvas.width / 2, canvas.height / 2, 3, 'rgb(255, 0, 0)', false);

    me = new Person('img/bernie.png', 200,200 , 5, 'rgb(0, 0, 0)', true);

    window.requestAnimationFrame(updateCanvas);
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    me.draw(ctx, showLines);
    trump.draw(ctx, showLines);
    carson.draw(ctx, showLines);
    pence.draw(ctx, showLines);

    me.updateTarget(mouseX, mouseY);
    trump.updateTarget(me.x, me.y);
    carson.updateTarget(me.x, me.y);
    pence.updateTarget(me.x, me.y);

    window.requestAnimationFrame(updateCanvas);
}
