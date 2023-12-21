class Particula {
  constructor(_x, _y, _color) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 100));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
    this.color = _color;
    // this.vel = random(-1, 1);
  }
  update() {
    // this.pos += this.vel;
    this.r = random();
    if (this.r < 0.25) {
      this.pos.y -= this.side;
    } else if (this.r < 0.5) {
      this.pos.x += this.side;
    } else if (this.r < 0.75) {
      this.pos.y += this.side;
    } else {
      this.pos.x -= this.side;
    }

    this.lifespan -= 1;
    if (this.lifespan <= 0) {
      this.isAlive = false;
      rect(this.pos.x, this.pos.y, this.side * 2);
    }
  }

  display() {
    fill(this.color);
    stroke(255);
    rect(this.pos.x, this.pos.y, this.side);
  }
}
