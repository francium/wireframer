window.onload = function()
{
    var canvas = document.getElementById("paper");
    var ctx = canvas.getContext("2d");

    var X = canvas.width;
    var Y = canvas.height;

    var draw = new Draw(ctx, X, Y);

    var PI = Math.PI;
    var TWO_PI = 2 * Math.PI;

    var FPS = 20;

    var run = function()
    {
        if (getIsStarted())
        {
            draw.clearRect(0, 0, X, Y);
            draw.drawLine(shape[0], shape[1], "red");
            draw.drawLine(shape[1], shape[2], "red");
            draw.drawLine(shape[2], shape[3], "red");
            draw.drawLine(shape[3], shape[0], "red");
            draw.drawLine(shape[4], shape[5], "red");
            draw.drawLine(shape[5], shape[6], "red");
            draw.drawLine(shape[6], shape[7], "red");
            draw.drawLine(shape[7], shape[4], "red");
            draw.drawLine(shape[0], shape[4], "red");
            draw.drawLine(shape[1], shape[5], "red");
            draw.drawLine(shape[2], shape[6], "red");
            draw.drawLine(shape[3], shape[7], "red");
            for (var i=0; i<shape.length; i++) {
                var col = "green";
                if (i==1) col = "blue";
                draw.drawCircle(shape[i].x, shape[i].y, 2, col);
                //rotatePointX(shape[i], toRad(1));
                //rotatePointY(shape[i], -PI/64);
                //rotatePointZ(shape[i], PI/32);
            }
        }
    }

    var b1 = new Point(0, 0, 0);
    var b2 = new Point(50, 0, 0);
    var b3 = new Point(50, 50, 0);
    var b4 = new Point(0, 50, 0);

    var r1 = new Point(0, 0, 50);
    var r2 = new Point(50, 0, 50);
    var r3 = new Point(50, 50, 50);
    var r4 = new Point(0, 50, 50);

    shape = [b1,b2,b3,b4,r1,r2,r3,r4];
        for (var i=0; i<shape.length; i++)
        {
            // center obj to origin
            shape[i].x -= 25;
            shape[i].y -= 25;
            shape[i].z -= 25;
            // 'Magic' rotation numbers, 45deg and 35.26438968deg
            applyOrthoPoint(shape[i]);
        }

    setInterval(run, 1000/FPS);
}
