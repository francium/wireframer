require(['draw', 'model'],
  function(draw, model) {
  var pauseBut = document.getElementById('pauseBut');

  var canvas = document.getElementById('paper');
  var ctx = canvas.getContext('2d');

  var canvasHeight = canvas.height;
  var canvasWidth = canvas.width;

  var drawer = new draw.Draw(ctx, canvasWidth, canvasHeight);

  var PI = Math.PI;
  var TAU = 2 * PI;

  var FPS = 6;
  var paused = false;

  var object;

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

  function run() {
    if (!paused) {
      drawer.clearCanvas();
      object.render(drawer, 50);
      object.rotateY(PI/256);
    }
  }

  var req = new XMLHttpRequest();
  req.open('GET', 'res/obj/teapot.obj');
  req.addEventListener('load', function() {
    object = new model.Model(req.responseText);
    object.moveY(-2);
    object.rotateY(-PI/6);
    object.applyOrtho();
    object.render(drawer, 100);
    //setInterval(run, 1000/FPS);
  });
  req.send();
});
