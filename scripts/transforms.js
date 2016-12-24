define(['angle'], function(angle) {
  var rotatePointX = function(p, rad) {
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.y = y * Math.cos(rad) + z * -Math.sin(rad);
    p.z = y * Math.sin(rad) + z * Math.cos(rad);
  }

  var rotatePointY = function(p, rad) {
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.x = x * Math.cos(rad) + z * Math.sin(rad);
    p.z = x * -Math.sin(rad) + z * Math.cos(rad);
  }

  var rotatePointZ = function(p, rad) {
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.x = x * Math.cos(rad) + y * -Math.sin(rad);
    p.y = x * Math.sin(rad) + y * Math.cos(rad);
  }

  var rotateVectorX = function(v, rad) {
    rotatePointX(v.t, rad);
    rotatePointX(v.h, rad);
  }

  var rotateVectorY = function(v, rad)
  {
    rotatePointY(v.t, rad);
    rotatePointY(v.h, rad);
  }

  var rotateVectorZ = function(v, rad) {
    rotatePointZ(v.t, rad);
    rotatePointZ(v.h, rad);
  }

  var applyOrthoPoint = function(pt) {
    rotatePointY(pt, angle.toRad(45));
    rotatePointX(pt, angle.toRad(35.264));
  }

  return {
    rotatePointX: rotatePointX,
    rotatePointY: rotatePointY,
    rotatePointZ: rotatePointZ,
    rotateVectorX: rotateVectorX,
    rotateVectorY: rotateVectorY,
    rotateVectorZ: rotateVectorZ,
    applyOrthoPoint: applyOrthoPoint
  }
});
