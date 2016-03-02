var rotatePointZ = function(p, rad)
{
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.x = x * Math.cos(rad) + y * -Math.sin(rad);
    p.y = x * Math.sin(rad) + y * Math.cos(rad);
}

var rotatePointY = function(p, rad)
{
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.x = x * Math.cos(rad) + z * Math.sin(rad);
    p.z = x * -Math.sin(rad) + z * Math.cos(rad);
}

var rotatePointX = function(p, rad)
{
    var x = p.x;
    var y = p.y;
    var z = p.z;
    p.y = y * Math.cos(rad) + z * -Math.sin(rad);
    p.z = y * Math.sin(rad) + z * Math.cos(rad);
}

var rotateVectorZ = function(v, rad)
{
    rotatePointZ(v.t, rad);
    rotatePointZ(v.h, rad);
}

var rotateVectorY = function(v, rad)
{
    rotatePointY(v.t, rad);
    rotatePointY(v.h, rad);
}

var rotateVectorZ = function(v, rad)
{
    rotatePointX(v.t, rad);
    rotatePointX(v.h, rad);
}

var applyOrthoPoint = function(pt)
{
        rotatePointY(pt, toRad(45));
        rotatePointX(pt, toRad(35.264));
}
