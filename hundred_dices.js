var w = window.innerWidth;;
var h = window.innerHeight;

function setup() {
  c = createCanvas(w, h);
  noLoop();
}

// antall terninger
var numDices = 100;

// startposisjoner for tegning
var xpos = w / 10;
var ypos = h / 10;

// sidelengde
var s = 50;

// radius øye
var r = s / 5;

var diceColor = '#ff6666';
//var diceColors = ['#88ff4d', '#ff6666', '#809fff'];
var eyeColor = '#ffcc80';

var cornerRadius = 3;

function two(xpos, ypos, s, r) {
  
  fill(eyeColor);
  //venstre øvre
  circle(xpos + r, ypos + r, r);
  
  // høyre nedre
  circle(xpos + s - r, ypos + s - r, r);
  

}

function three(xpos, ypos, s, r) {
  
  fill(eyeColor);
  
  //venstre øvre
  circle(xpos + r, ypos + r, r);
  
  // høyre nedre
  circle(xpos + s - r, ypos + s - r, r);
  
  // midtre
  circle(xpos + s / 2, ypos + s / 2, r);
}


function five(xpos, ypos, s, r) {
  
  fill(eyeColor);
  //venstre øvre
  circle(xpos + r, ypos + r, r);
  
  //høyre øvre
  circle(xpos + s - r,ypos + r, r);
  
  // venstre nedre
  circle(xpos + r, ypos + s - r, r);
  
  // høyre nedre
  circle(xpos + s - r, ypos + s - r, r);
  
  // midtre
  circle(xpos + s / 2, ypos + s / 2, r);
}

function six(xpos, ypos, s, r) {

  //fill(eyeColor);
  //venstre øvre
  circle(xpos + r, ypos + r, r);
  
  //høyre øvre
  circle(xpos + s - r,ypos + r, r);
  
  // venstre nedre
  circle(xpos + r, ypos + s - r, r);
  
  // høyre nedre
  circle(xpos + s - r, ypos + s - r, r);
  
  // midtre venstre
  circle(xpos + r, ypos + s / 2, r);
  
  // midtre høyre
  circle(xpos + s - r, ypos + s / 2, r);
}


function one(xpos, ypos, s, r) {
  // midtre
  fill(eyeColor);
  circle(xpos + s / 2, ypos + s / 2, r);
}

function four(xpos, ypos, s, r) {
  
  fill(eyeColor);
  //venstre øvre
  circle(xpos + r, ypos + r, r);
  
  //høyre øvre
  circle(xpos + s - r,ypos + r, r);
  
  // venstre nedre
  circle(xpos + r, ypos + s - r, r);
  
  // høyre nedre
  circle(xpos + s - r, ypos + s - r, r);
  
}


function draw() {
  background('white');
  var diceSum = 0;
  
  for(i=0; i<numDices; i++) {

    let dice_list = ['one', 'two', 'three', 'four', 'five', 'six'];
    let dice = random(dice_list);
    
    // tegner terningen
    fill(diceColor);
    rect(xpos, ypos, s, s, cornerRadius);
    
    // farger øynene
    fill(eyeColor);
    
    
    if (dice == 'one') {
      one(xpos, ypos, s, r);
      diceSum +=1;
    }
    if (dice == 'two') {
      two(xpos, ypos, s, r);
      diceSum += 2;
    }
    if (dice == 'three') {
      three(xpos, ypos, s, r);
      diceSum += 3;
    }
    if (dice == 'four') {
      four(xpos, ypos, s, r);
      diceSum += 4;
    }
    if (dice == 'five') {
      five(xpos, ypos, s, r);
      diceSum += 5;
    }
    if (dice == 'six') {
      six(xpos, ypos, s, r);
      diceSum += 6;
    }
    
    // avstand mellom
    xpos = xpos + s + s/2;
    if (xpos + s >= w) {
      xpos = w / 10;
      ypos = ypos + s + s/2;
    }
  }
  fill('black');
  //text(diceSum, w - 25,h - 25);
  console.log(diceSum); 
}


function keyPressed() {
  xpos = w / 10;
  ypos = h / 10;
  draw();
}

function mouseClicked() {
  xpos = w / 10;
  ypos = h / 10;
  draw();
}
