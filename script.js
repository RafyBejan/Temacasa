function setup() {
  createCanvas(600, 400);
}

function draw() {
  // structura
  fill("green");
  rect(220,150,280,200);
  //acoperis
  fill("red");
  triangle(135,150,570,150,345,10);
  // usa
  fill("brown");
  rect(265,230,60,120);
  // geam
  fill("gray");
  rect(380,200,45,60);
  //geam 2
  fill("gray");
  rect(428,200,45,60);
  //horn
  fill("green");
  rect(428,20,40,80);
  // sun fill()
  fill("yellow");
  circle(90,70,50);
  fill("yellow");
  let rayLength = 60; // lungimea razei
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i;
      let x1 = 90 + cos(angle - PI / 16) * 40; // Coordonatele punctului 1 al triunghiului
      let y1 = 70 + sin(angle - PI / 16) * 40; // Coordonatele punctului 1 al triunghiului
      let x2 = 90 + cos(angle) * rayLength; // Coordonatele punctului 2 al triunghiului
      let y2 = 70 + sin(angle) * rayLength; // Coordonatele punctului 2 al triunghiului
      let x3 = 90 + cos(angle + PI / 16) * 40; // Coordonatele punctului 3 al triunghiului
      let y3 = 70 + sin(angle + PI / 16) * 40; // Coordonatele punctului 3 al triunghiului
      triangle(x1, y1, x2, y2, x3, y3);
  }

  fill("gray");
  circle(345,50,30);
  stroke(0);
  line(345, 50 - 15, 345, 50 + 15);
  line(345 - 15, 50, 345 + 15, 50);
  
  
}