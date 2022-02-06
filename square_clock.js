// p5js

var w = 600;
var h = 600;

function setup() {
  createCanvas(w, h);
  frameRate(10);
  
}

var hr, m, s, hour_hand, minute_hand, second_hand;


function draw() {
  // hent tid
  hr = hour();
  m = minute();
  s = second();
  
  hour_hand = hr * (h / 24);
  minute_hand = m * (w / 60);
  second_hand = s * (w / 60);
  
  background(255);
  
  // tall og linjer utenom visere
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  textFont("Georgia");
  textSize(18);

  text("30", w / 2, 30);
  
  text("10", w / 6, 30);
  text("20", w / 3, 30);
  text("40", (w / 12) * 8, 30);
  text("50", (w / 12) * 10, 30);

  
  text("6", 30, h / 4);
  text("12", 30, h / 2);
  text("18", 30, (h / 4) * 3);
  
  
  // hjelpestreker
  // minutter og sekunder
  for(i=1; i<60; i++) {
    line(i * (w / 60), 0, i * (w / 60), 15);
  }
  
  for(j=1; j<24; j++) {
    line(0, j * (h / 24), 15, j * (h / 24));
  }
  
  // sekundviser
  strokeWeight(2);
  stroke('red');
  line(second_hand, 0, second_hand, h);
  
  
  // minuttviser
  strokeWeight(4);
  stroke('black');
  line(minute_hand, 0, minute_hand, h);
  
  // timeviser
  strokeWeight(7);
  line(0, hour_hand, w, hour_hand);
  
  
}
