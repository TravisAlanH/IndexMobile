const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const canW = innerWidth;
const canH = innerHeight;

let playerSpeed = 5;
let playerSize = 15;
const playerLocationX = 1;
const playerLocationY = 1;

class Player {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

const player = new Player(canW / 2, canH / 2, playerSize, "white", null);

function animate() {
  animationID = requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
}

animate();
