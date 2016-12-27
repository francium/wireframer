define(function() {
  var Point = function(x, y, z) {
      this.x = parseFloat(x);
      this.y = parseFloat(y);
      this.z = parseFloat(z);
  }

  return {
    Point: Point
  }
});
