define(function() {
  var Vector = function(t, h) {
      this.t = t;
      this.h = h;
  }

  Vector.prototype.draw = function() {
      drawLine(this.t, this.h, "black");
  }

  return {
    Vector: Vector
  }
});
