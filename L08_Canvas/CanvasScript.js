window.addEventListener("load", handleLoad);
// tslint:disable-next-line: no-any
let circles = [];
function handleLoad(_event) {
    let canvas = document.getElementById("canvas");
    let crc2 = canvas.getContext("2d");
    let height = canvas.height;
    let width = canvas.width;
}
createCircle();
function createCircle() {
    let r = getRandom(20, 100);
    console.log(r);
    // tslint:disable-next-line: no-any
    let newCircle = new Circle({ x: getRandom(0 + r, canvas.width - r), y: getRandom(0 + r, canvas.height - r), radius: r });
    circles.push(newCircle);
}
console.log(circles.length);
function Circle({ x, y, radius }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = {
        x: getRandom(-5, 5),
        y: getRandom(-5, 5)
    };
    console.log(this.velocity.x);
    this.circleUpdate = function () {
        this.circleMove();
        this.circleDraw();
        this.cicleCollider();
    };
    this.circleMove = function () {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };
    this.circleDraw = function () {
        crc2.beginPath();
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        crc2.strokeStyle = "red";
        crc2.stroke();
    };
    this.cicleCollider = function () {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }
    };
}
draw();
function draw() {
    crc2.clearRect(0, 0, canvas.width, canvas.height);
    for (let i; i < circles.length; i++) {
        circles[i].circleUpdate();
        console.log(circles[i]);
    }
    window.requestAnimationFrame(draw);
}
function getRandom(_min, _max) {
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
//function drawCircle(): void {
console.log("Circle");
window.requestAnimationFrame(drawCircle);
crc2.clearRect(0, 0, width, height);
crc2.beginPath();
crc2.arc(x, y, radius, 0, Math.PI * 2, false);
crc2.strokeStyle = "Red";
crc2.stroke();
if (x + radius > width || x - radius < 0) {
    dx = -dx;
}
if (y + radius > height || y - radius < 0) {
    dy = -dy;
}
x += dx * 2;
y += dy;
//# sourceMappingURL=CanvasScript.js.map