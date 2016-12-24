require(['angle', 'draw', 'point', 'transforms', 'vector'],
  function(angle, draw, point, transforms, vector) {
  var pauseBut = document.getElementById('pauseBut');

  var canvas = document.getElementById('paper');
  var ctx = canvas.getContext('2d');

  var canvasHeight = canvas.height;
  var canvasWidth = canvas.width;

  var drawer = new draw.Draw(ctx, canvasWidth, canvasHeight);

  var PI = Math.PI;
  var TAU = 2 * PI;

  var FPS = 20;
  var paused = false;

  function run() {
    if (!paused) {
      drawer.clearRect(0, 0, canvasHeight, canvasWidth);
      drawer.line(shape[0], shape[1], 'yellow');
      drawer.line(shape[1], shape[2], 'yellow');
      drawer.line(shape[2], shape[3], 'yellow');
      drawer.line(shape[3], shape[0], 'yellow');
      drawer.line(shape[4], shape[5], 'yellow');
      drawer.line(shape[5], shape[6], 'yellow');
      drawer.line(shape[6], shape[7], 'yellow');
      drawer.line(shape[7], shape[4], 'yellow');
      drawer.line(shape[0], shape[4], 'yellow');
      drawer.line(shape[1], shape[5], 'yellow');
      drawer.line(shape[2], shape[6], 'yellow');
      drawer.line(shape[3], shape[7], 'yellow');
      for (var i=0; i<shape.length; i++) {
        var col = 'yellow';
        if (i==1) col = 'red';
        drawer.circle(shape[i].x, shape[i].y, 3, col);
        //transforms.rotatePointX(shape[i], toRad(1));
        transforms.rotatePointY(shape[i], -PI/64);
        //transforms.rotatePointZ(shape[i], PI/32);
      }
    }
  }

  var b1 = new point.Point(0, 0, 0);
  var b2 = new point.Point(50, 0, 0);
  var b3 = new point.Point(50, 50, 0);
  var b4 = new point.Point(0, 50, 0);

  var r1 = new point.Point(0, 0, 50);
  var r2 = new point.Point(50, 0, 50);
  var r3 = new point.Point(50, 50, 50);
  var r4 = new point.Point(0, 50, 50);

  shape = [b1,b2,b3,b4,r1,r2,r3,r4];
  for (var i=0; i<shape.length; i++) {
    // center obj to origin
    shape[i].x -= 25;
    shape[i].y -= 25;
    shape[i].z -= 25;
    // 'Magic' rotation numbers, 45deg and 35.26438968deg
    transforms.applyOrthoPoint(shape[i]);
  }

  pauseBut.onclick = (e) => {
    if (!paused) {
      pauseBut.className += 'button-danger';
      pauseBut.textContent = 'start';
    } else {
      pauseBut.className = '';
      pauseBut.textContent = 'pause';
    }

    paused = !paused;
  }

  setInterval(run, 1000/FPS);
});
