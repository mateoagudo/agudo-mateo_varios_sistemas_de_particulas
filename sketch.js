// let sp = [];
let s;
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(10);
  // for (let i = 0; i < 10; i++) {
  //   let p = new Particula(windowWidth / 2, windowHeight / 2);
  //   ps.push(p);
  // }
  s = new Sistema();
  d = new Sistema();
}

function draw() {
  background(0, 15);
  // for (let i = 0; i < ps.lenght; i++) {
  //   if (p.isAlive) {
  //     ps[i].update();
  //     ps[i].display();
  //     print("funciona");
  //   }
  // }
  s.update();
  s.display();
  d.update();
  d.display();
}
