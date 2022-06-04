var L10_Asteroids;
(function (L10_Asteroids) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            //console.log("Movable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Asteroids.Vector(0, 0);
            this.velocity = new L10_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Movable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Asteroids.crc2.canvas.height;
            if (this.position.x > L10_Asteroids.crc2.canvas.width)
                this.position.x -= L10_Asteroids.crc2.canvas.width;
            if (this.position.y > L10_Asteroids.crc2.canvas.height)
                this.position.y -= L10_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Movable draw");
        }
    }
    L10_Asteroids.Moveable = Moveable;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Movable.js.map