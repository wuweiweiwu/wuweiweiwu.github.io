function Background(img, width, height, per_row, per_column) {
  this.img = img;
  this.width = width;
  this.height = height;
  this.per_row = per_row;
  this.per_column = per_column;
  this.room_width = this.width / this.per_row;
  this.room_height = this.height / this.per_column;
  //start at center
  this.current_room = 4;
  this.current_room_x = this.room_width;
  this.current_room_y = this.room_height;
  this.target_room_x = this.current_room_x;
  this.target_room_y = this.current_room_y;
}
Background.prototype.toRoom = function(targetRoom, x, y, w, h) {
  if (targetRoom < 0 || targetRoom >= 9)
    return false;

  var targetRow = Math.floor(targetRoom / this.per_row);
  var targetColumn = Math.floor(targetRoom % this.per_row)

  var currentRow = Math.floor(this.current_room / this.per_row);
  var currentColumn = Math.floor(this.current_room % this.per_row);

  if ((targetRow == currentRow || targetColumn == currentColumn) && this.withinDoorway(x, y, w, h)) {
    this.target_room_x = targetColumn * this.room_width;
    this.target_room_y = targetRow * this.room_height;
    this.current_room = targetRoom;
    return true;
  }
  return false;
}
Background.prototype.withinDoorway = function(person_x, person_y, person_width, person_height) {
  return ((person_x < window.innerWidth / 2 + person_width / 2 && person_x > window.innerWidth / 2 - person_width / 2) || (person_y < window.innerHeight / 2 + person_width / 2 && person_y > window.innerHeight / 2 - person_width / 2));
}
Background.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.current_room_x, this.current_room_y, this.room_width, this.room_height, 0, 0, window.innerWidth, window.innerHeight);
  var diffx = 40 * (this.current_room_x - this.target_room_x) / (Math.abs(this.current_room_x - this.target_room_x));
  var diffy = 40 * (this.current_room_y - this.target_room_y) / (Math.abs(this.current_room_y - this.target_room_y));
  if (Math.abs(this.current_room_x - this.target_room_x) < diffx) {
    diffx = (this.current_room_x - this.target_room_x) / (Math.abs(this.current_room_x - this.target_room_x));
  }
  if (Math.abs(this.current_room_y - this.target_room_y) < diffy) {
    diffy = (this.current_room_y - this.target_room_y) / (Math.abs(this.current_room_y - this.target_room_y));
  }

  if (Math.abs(this.current_room_x - this.target_room_x) >= diffx) {
    this.current_room_x -= diffx;
    return false;
  }
  if (Math.abs(this.current_room_y - this.target_room_y) >= diffy) {
    this.current_room_y -= diffy;
    return false;
  }
  return true;
}
