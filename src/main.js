const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Variables
const light = { x: 160, y: 200 };
const colors = ["#f5c156", "#e6616b", "#5cd3ad"];
let boxes = [];

// Resize canvas
function resize() {
  const box = canvas.getBoundingClientRect();
  canvas.width = box.width;
  canvas.height = box.height;
}

// Draw light source
function drawLight() {
  ctx.beginPath();
  ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
  let gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
  gradient.addColorStop(0, "#3b4654");
  gradient.addColorStop(1, "#2c343f");
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
  gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(1, "#3b4654");
  ctx.fillStyle = gradient;
  ctx.fill();
}

// Box class
class Box {
  constructor() {
    this.half_size = Math.floor(Math.random() * 50 + 1);
    this.x = Math.floor(Math.random() * canvas.width + 1);
    this.y = Math.floor(Math.random() * canvas.height + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 2000;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  getDots() {
    const full = (Math.PI * 2) / 4;
    return {
      p1: {
        x: this.x + this.half_size * Math.sin(this.r),
        y: this.y + this.half_size * Math.cos(this.r),
      },
      p2: {
        x: this.x + this.half_size * Math.sin(this.r + full),
        y: this.y + this.half_size * Math.cos(this.r + full),
      },
      p3: {
        x: this.x + this.half_size * Math.sin(this.r + full * 2),
        y: this.y + this.half_size * Math.cos(this.r + full * 2),
      },
      p4: {
        x: this.x + this.half_size * Math.sin(this.r + full * 3),
        y: this.y + this.half_size * Math.cos(this.r + full * 3),
      },
    };
  }

  rotate() {
    const speed = (60 - this.half_size) / 20;
    this.r += speed * 0.002;
    this.x += speed;
    this.y += speed;
  }

  draw() {
    const dots = this.getDots();
    ctx.beginPath();
    ctx.moveTo(dots.p1.x, dots.p1.y);
    ctx.lineTo(dots.p2.x, dots.p2.y);
    ctx.lineTo(dots.p3.x, dots.p3.y);
    ctx.lineTo(dots.p4.x, dots.p4.y);
    ctx.fillStyle = this.color;
    ctx.fill();

    if (this.y - this.half_size > canvas.height) this.y -= canvas.height + 100;
    if (this.x - this.half_size > canvas.width) this.x -= canvas.width + 100;
  }

  drawShadow() {
    const dots = this.getDots();
    const points = Object.values(dots).map((dot) => {
      const angle = Math.atan2(light.y - dot.y, light.x - dot.x);
      return {
        endX: dot.x + this.shadow_length * Math.sin(-angle - Math.PI / 2),
        endY: dot.y + this.shadow_length * Math.cos(-angle - Math.PI / 2),
        startX: dot.x,
        startY: dot.y,
      };
    });

    for (let i = 0; i < points.length; i++) {
      const n = (i + 1) % points.length;
      ctx.beginPath();
      ctx.moveTo(points[i].startX, points[i].startY);
      ctx.lineTo(points[n].startX, points[n].startY);
      ctx.lineTo(points[n].endX, points[n].endY);
      ctx.lineTo(points[i].endX, points[i].endY);
      ctx.fillStyle = "#2c343f";
      ctx.fill();
    }
  }
}

// Draw loop
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLight();

  boxes.forEach((box) => {
    box.rotate();
    box.drawShadow();
  });

  boxes.forEach((box, i) => {
    collisionDetection(i);
    box.draw();
  });

  requestAnimationFrame(draw);
}

// Collision detection
function collisionDetection(index) {
  for (let i = boxes.length - 1; i >= 0; i--) {
    if (i !== index) {
      const dx = boxes[index].x - boxes[i].x;
      const dy = boxes[index].y - boxes[i].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < boxes[index].half_size + boxes[i].half_size) {
        boxes[index].half_size = Math.max(boxes[index].half_size - 1, 1);
        boxes[i].half_size = Math.max(boxes[i].half_size - 1, 1);
      }
    }
  }
}

// Initialize
resize();
while (boxes.length < 14) boxes.push(new Box());
draw();

// Event listeners
window.onresize = resize;
canvas.onmousemove = (e) => {
  light.x = e.offsetX || e.layerX;
  light.y = e.offsetY || e.layerY;
};