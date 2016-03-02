var Draw = function(ctx, X, Y)
{
    this.ctx = ctx;
    this.X = X;
    this.Y = Y;
}

Draw.prototype.clearRect = function(x0, y0, x1, y1)
{
    this.ctx.clearRect(x0, y0, x1, y1);
}

Draw.prototype.drawCircle = function(pt, r, color)
{
    var x = pt.x + X/2;
    var y = -p.y + Y/2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TWO_PI);
    ctx.fill();
}

Draw.prototype.drawLine = function(from, to, color)
{
    var x0 = from.x + this.X/2;
    var y0 = -from.y + this.Y/2;
    var x1 = to.x + this.X/2;
    var y1 = -to.y + this.Y/2;
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 0.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
}

Draw.prototype.drawTriangle = function(pt1, pt2, pt3, color)
{
    var x = pt1.x + this.X/2;
    var y = -pt1.y + this.Y/2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    for (var i=1; i<3; i++)
    {
        x = arguments[i].x + this.X/2;
        y = -arguments[i].y + this.Y/2;
        this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fill();
}

Draw.prototype.drawCircle = function(x, y, r, color)
{
    x += this.X/2;
    y = -y + this.Y/2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2*Math.PI);
    this.ctx.fill();
}
