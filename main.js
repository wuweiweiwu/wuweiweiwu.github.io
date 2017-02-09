//sprite animation
var sheet_width = 624;
var sheet_height = 450;
var per_row = 6;
var per_column = 3;
var person_width = sheet_width / per_row;
var person_height = sheet_height / per_column;
//background animation
var room_width = 864;
var room_height = 560;
var room_per_row = 3;
var room_per_column = 3;
var all_room_width = room_width * room_per_row;
var all_room_height = room_height * room_per_column;

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    //  ctx.globalCompositeOperation = 'destination-over';
    sprites = new Sprites('img/sprite_sheet.png', sheet_width, sheet_height, per_row, per_column);

    background = new Background('img/all_rooms.png', all_room_width, all_room_height, room_per_row, room_per_column);

    Directions = {
        LEFT: 0,
        RIGHT: 1,
        S_LEFT: 2,
        S_RIGHT: 3,
        UP: 4,
        DOWN: 5,
        NONE: 6
    }

    person_x = window.innerWidth / 2;
    person_y = window.innerHeight / 2;

    horizontal_dir = Directions.S_LEFT;
    vertical_dir = Directions.NONE;
    var key_status = [false, false, false, false];
    var all_up = true;

    window.addEventListener("keydown", function(event) {
        var keyCode = event.keyCode;
        all_up = false;
        switch (keyCode) {
            case 39:
            case 68: //d
                horizontal_dir = Directions.RIGHT;
                key_status[0] = true;
                break;
            case 40:
            case 83: //s
                vertical_dir = Directions.DOWN;
                key_status[1] = true;
                break;
            case 37:
            case 65: //a
                horizontal_dir = Directions.LEFT;
                key_status[2] = true;
                break;
            case 38:
            case 87: //w
                vertical_dir = Directions.UP;
                key_status[3] = true;
                break;
        }
        // console.log(horizontal_dir);
        // console.log(vertical_dir);
    }, false);

    function allup() {
        all_up = true;
        for (i = 0; i < key_status.length; i++) {
            if (key_status[i] == true) {
                all_up = false
            }
        }
        return all_up;
    }

    window.addEventListener("click", function(event) {
        console.log("x: " + event.clientX + " y: " + event.clientY);
    });

    window.addEventListener("keyup", function(event) {
        var keyCode = event.keyCode;
        switch (keyCode) {
            case 39:
            case 68: //d
                key_status[0] = false;
                //  if (allup())
                if (!key_status[2])
                    horizontal_dir = Directions.S_RIGHT;
                break;
            case 40:
            case 83: //s
                key_status[1] = false;
                vertical_dir = Directions.NONE;
                if (allup()) {
                    if (horizontal_dir == Directions.LEFT || horizontal_dir == Directions.S_LEFT)
                        horizontal_dir = Directions.S_LEFT;
                    else
                        horizontal_dir = Directions.S_RIGHT;
                }
                break;
            case 37:
            case 65: //a
                key_status[2] = false;
                //if (allup())
                if (!key_status[0])
                    horizontal_dir = Directions.S_LEFT;
                break;
            case 38:
            case 87: //w
                key_status[3] = false;
                vertical_dir = Directions.NONE;
                if (allup()) {
                    if (horizontal_dir == Directions.LEFT || horizontal_dir == Directions.S_LEFT)
                        horizontal_dir = Directions.S_LEFT;
                    else
                        horizontal_dir = Directions.S_RIGHT;
                }
                break;
        }
        // console.log("release " + horizontal_dir);
        // console.log("release " + vertical_dir);
    }, false);

    window.requestAnimationFrame(draw);
}

//bounds
var border = 85;
var width_ratio = border / room_width;
var height_ratio = border / room_height;
var right_bound = (1 - width_ratio) * window.innerWidth;
var left_bound = width_ratio * window.innerWidth;
var top_bound = height_ratio * window.innerHeight;
var bottom_bound = (1 - height_ratio) * window.innerHeight;
var dx = 0;
var dy = 0;
var app_open = false;

console.log(right_bound);
console.log(left_bound);
console.log(top_bound);
console.log(bottom_bound);

function outOfBounds(direction) {
    switch (direction) {
        case Directions.UP:
            return (person_y + 70 - person_height / 2 + dy < top_bound && vertical_dir == Directions.UP);
            break;
        case Directions.DOWN:
            return (person_y + person_height / 2 + dy > bottom_bound && vertical_dir == Directions.DOWN);
            break;
        case Directions.LEFT:
            return (person_x - person_width / 2 + dx < left_bound && horizontal_dir == Directions.LEFT);
            break;
        case Directions.RIGHT:
            return (person_x + person_width / 2 + dx > right_bound && horizontal_dir == Directions.RIGHT);
            break;
    }
    return false;
}

function draw() {

    if (person_x < window.innerWidth / 2 + person_width / 2 && person_x > window.innerWidth / 2 - person_width / 2 &&
        person_y < window.innerHeight / 2 + person_height / 2 && person_y > window.innerHeight / 2 - person_height / 2) {
        if (background.current_room == 7 && !app_open) { //bottom
            //figuring it out
            //document.getElementById('taco').click();
            //  window.location.replace("http://theweiweiwu.com/games/taco");
            window.location.href = 'http://theweiweiwu.com/games/taco';

            app_open = true;
        }

    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    dx = 0;
    dy = 0;

    switch (vertical_dir) {
        case Directions.UP:
            dy = -5;
            break;
        case Directions.DOWN:
            dy = 5;
            break;
        case Directions.NONE:
            dy = 0;
            break;
    }

    //move feet when you are going straight up or down
    if (horizontal_dir == Directions.S_RIGHT && vertical_dir != Directions.NONE) {
        sprites.updateWalkRight();
    } else if (horizontal_dir == Directions.S_LEFT && vertical_dir != Directions.NONE) {
        sprites.updateWalkLeft();
    }
    switch (horizontal_dir) {
        case Directions.LEFT:
            sprites.updateWalkLeft();
            dx = -5;
            break;
        case Directions.RIGHT:
            sprites.updateWalkRight();
            dx = 5;
            break;
        case Directions.S_LEFT:
            if (vertical_dir == Directions.NONE)
                sprites.updateStandLeft();
            dx = 0;
            break;
        case Directions.S_RIGHT:
            if (vertical_dir == Directions.NONE)
                sprites.updateStandRight();
            dx = 0;
            break;
    }

    //room moving stuff

    //left room
    if (outOfBounds(Directions.LEFT)) {
        dx = 0;
        if (background.toRoom(background.current_room - 1, person_x, person_y, person_width, person_height)) {
            person_x = 5 / 6 * window.innerWidth;
            app_open = false;
        }
    }
    //right room
    if (outOfBounds(Directions.RIGHT)) {
        dx = 0;
        if (background.toRoom(background.current_room + 1, person_x, person_y, person_width, person_height)) {
            person_x = 1 / 6 * window.innerWidth;
            app_open = false;

        }

    }
    //bottom room
    if (outOfBounds(Directions.DOWN)) {
        dy = 0;
        console.log("x: " + person_x + " y: " + person_y);
        if (background.toRoom(background.current_room + 3, person_x, person_y, person_width, person_height)) {
            person_y = 1 / 4 * window.innerHeight;
            app_open = false;

        }
    }
    //top room
    if (outOfBounds(Directions.UP)) {
        dy = 0;
        if (background.toRoom(background.current_room - 3, person_x, person_y, person_width, person_height)) {
            person_y = 3 / 4 * window.innerHeight;
            app_open = false;

        }
    }

    //dont draw sprite until background is done updating
    if (background.draw(ctx)) {
        person_x += dx;
        person_y += dy;
        sprites.draw(ctx, person_x, person_y);
    }

    // background.draw(ctx);

    window.requestAnimationFrame(draw);
}
