var L10_Asteroids;
(function (L10_Asteroids) {
    class Projectile extends L10_Asteroids.Moveable {
        lifetime = 2;
        constructor(_position, _velocity) {
            console.log("Projectile constructor");
            super(_position);
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Asteroid draw");
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.strokeRect(-1, -1, 2, 2);
            L10_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.velocity = new L10_Asteroids.Vector(0, 0);
        }
    }
    L10_Asteroids.Projectile = Projectile;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map