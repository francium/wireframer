require(['draw', 'model'], function(draw, model) {
  var modelSelector = document.getElementById('modelSelector');

  var modelFile = '/res/obj/teapot.obj';

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

  modelSelector.onchange = (e) => {
    modelFile = modelSelector.value;
    render();
  }

  function run() {
    if (!paused) {
      drawer.clearCanvas();
      object.render(drawer, 50);
      object.rotateY(PI/256);
    }
  }

  function render() {
    drawer.clearCanvas();

    var req = new XMLHttpRequest();
    req.open('GET', modelFile);
    req.addEventListener('load', function() {
      object = new model.Model(req.responseText);
      object.moveY(-2);
      object.rotateY(-PI/6);
      object.applyOrtho();
      object.render(drawer, 50);
    });
    req.send();
  }

  render();
});
