function Portal(src, roomnum, w, h) {
    this.img = new Image();
    this.img.src = src;
    this.width = w;
    this.height = h;
    this.rooms = roomnum;
}
Portal.prototype.draw = function(ctx, currentRoom) {
    var isPortalRoom = false;
    for (i = 0; i < this.rooms.length; i++) {
        if (currentRoom == this.rooms[i]) {
            isPortalRoom = true;
            break;
        }
    }

    if (isPortalRoom) {

        var time = new Date();

        ctx.save();
        ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
        //  ctx.translate(this.width / 2, this.height / 2);

        ctx.rotate((((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds()) * 8);
        //  ctx.fillRect(0, -12, 50, 24); // Shadow
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }

}
