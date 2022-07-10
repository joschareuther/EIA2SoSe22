namespace L10_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];
    let projectile: Projectile;
    export let lineWidth: number = 5;

    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.lineWidth = lineWidth;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";


        createPaths();
        console.log("Asteroids path: ", asteroidPaths);

        createAsteroids(5);
        //createShip();
        createUfo();

        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    function shootProjectile(_event: MouseEvent): void {
        console.log("Shoot projectile");
        let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let velocity: Vector = new Vector(0, 0);
        velocity.random(100, 100);
        projectile = new Projectile(origin, velocity);
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);

    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create asteroids");
        for (let d: number = 0; d < _nAsteroids; d++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function createUfo(): void {
        console.log("Create Ufo");
        let ufo: Ufo = new Ufo();
        moveables.push(ufo);
    }

    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

        projectile.move(1 / 50);
        projectile.draw();
        //ship.draw();
        //handleCollisions();

    }
}