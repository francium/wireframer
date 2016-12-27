define(function() {
  var Draw = function(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  Draw.prototype.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.height, this.width);
  }

  Draw.prototype.clearRect = function(x0, y0, x1, y1) {
      this.ctx.clearRect(x0, y0, x1, y1);
  }

  Draw.prototype.circle = function(pt, r, color) {
    var x = pt.x + width/2;
    var y = -p.y + height/2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TWO_PI);
    ctx.fill();
  }

  Draw.prototype.line = function(from, to, color, scale) {
    var x0 = from.x;
    var y0 = -from.y;
    var x1 = to.x;
    var y1 = -to.y;

    if (scale != undefined) {
      x0 *= scale;
      x1 *= scale;
      y0 *= scale;
      y1 *= scale;
    }

    x0 += this.width/2;
    y0 += this.height/2;
    x1 += this.width/2;
    y1 += this.height/2;

    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
  }

  Draw.prototype.triangle = function(pt1, pt2, pt3, color) {
    var x = pt1.x + this.width/2;
    var y = -pt1.y + this.height/2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    for (var i=1; i<3; i++) {
      x = arguments[i].x + this.width/2;
      y = -arguments[i].y + this.height/2;
      this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  Draw.prototype.circle = function(x, y, r, color) {
    x += this.width/2;
    y = -y + this.height/2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2*Math.PI);
    this.ctx.fill();
  }

  return {
    Draw: Draw
  }
});
