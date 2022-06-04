var L10_Asteroids;
(function (L10_Asteroids) {
    class Asteroid extends L10_Asteroids.Moveable {
        type;
        size;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_Asteroids.Vector(0, 0);
            this.velocity = new L10_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            //console.log("Asteroid draw");
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.scale(this.size, this.size);
            L10_Asteroids.crc2.translate(-50, -50);
            L10_Asteroids.crc2.lineWidth = 1 / this.size;
            L10_Asteroids.crc2.stroke(L10_Asteroids.asteroidPaths[this.type]);
            L10_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L10_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L10_Asteroids.Asteroid = Asteroid;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map