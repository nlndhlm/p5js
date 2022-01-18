var h = 400;
var w = 400;

// user inputs
var slices = 20;
var colored_slices = 6;
var slice_color = 'red';

function setup() {
  createCanvas(h, w);

  noLoop();
}

function draw() {
  background(220);
  strokeWeight(3);
  
  var radian_distance = 2 / slices;
  
  for(r=0; r < slices; r++){
    
    fill(slice_color);
    
    if(r > colored_slices - 1) {
      fill('white');
    }
    
    arc(w/2, h/2, w-20, h-20, 0, (2 - (r * radian_distance)) * PI, PIE);
    
  }
  
}
