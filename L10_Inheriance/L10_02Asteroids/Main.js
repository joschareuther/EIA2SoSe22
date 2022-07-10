var L10_Asteroids;
(function (L10_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    let projectile;
    L10_Asteroids.lineWidth = 5;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Asteroids.crc2 = canvas.getContext("2d");
        L10_Asteroids.crc2.lineWidth = L10_Asteroids.lineWidth;
        L10_Asteroids.crc2.fillStyle = "black";
        L10_Asteroids.crc2.strokeStyle = "white";
        L10_Asteroids.createPaths();
        console.log("Asteroids path: ", L10_Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        createUfo();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        let origin = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        let velocity = new L10_Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        projectile = new L10_Asteroids.Projectile(origin, velocity);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L10_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let d = 0; d < _nAsteroids; d++) {
            let asteroid = new L10_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create Ufo");
        let ufo = new Ufo();
        moveables.push(ufo);
    }
    function update() {
        //console.log("Update");
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        projectile.move(1 / 50);
        projectile.draw();
        //ship.draw();
        //handleCollisions();
    }
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Main.js.map