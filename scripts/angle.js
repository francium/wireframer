define(function() {
  var toDeg = function(rad) {
    return 180 * rad / Math.PI;
  }

  var toRad = function(deg) {
    return Math.PI * deg / 180;
  }

  return {
    toDeg: toDeg,
    toRad: toRad
  }
});
