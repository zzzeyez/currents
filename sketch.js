var amt = 21111;
var magnitude = 40;
var wobble = 0.005;
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var particles = [];
var flowfield;
var col = {
  r: 0,
  g: 0,
  b: 0,
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // frameRate(random(16, 60));
  // 
  // // randoms
  // amt = random(11111, 33333);
  // magnitude = random(20, 100);
  // wobble = random(0.001, 0.05);
  // inc = random(0.01, 0.3);
  // scl = random(3, 13);
  // // random color
  // col.r = random(150, 230);
  // col.g = random(150, 230);
  // col.b = random(150, 230);
  // 
  // cols = floor(width / scl);
  // rows = floor(height / scl);
  // flowfield = new Array(cols * rows);
  // 
  // for (var i = 0; i < amt; i++) {
  //   particles[i] = new Particle();
  // }
  // background(col.r, col.g, col.b);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(magnitude);
      flowfield[index] = v;
      xoff += inc;
      // these are forcefield visualization
      //
      // stroke(0, 10);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
    // this is the wobbliness (3dness)
    zoff += wobble;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
}

function mousePressed() {
	frameRate(random(16,30));

  // randoms
  // amt = random(11111, 33333);
  magnitude = random(10, 40);
  wobble = random(0.001, 0.03);
  inc = random(0.01, 0.1);
  scl = random(1, 13);
  // random color
  col.r = random(166, 230);
  col.g = random(166, 230);
  col.b = random(166, 230);

  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  for (var i = 0; i < amt; i++) {
    particles[i] = new Particle();
  }
	// background(20);
	background(col.r, col.g, col.b);

}
