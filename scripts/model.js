define(['face', 'point', 'transforms'],
  function(face, point, transforms) {
  function Model(objData) {
    this.verticies = [];
    this.faces = [];

    for (var line of objData.split('\n')) {
      line = line.split(/\s/);
      switch(line[0]) {
        case 'v':
          var x = line[1],
              y = line[2],
              z = line[3];
          this.verticies.push(new point.Point(x, y, z));
          break;
        case 'f':
          var points = [];
          var a = line[1],
              b = line[2],
              c = line[3];
          for (var p of [a, b, c]) {
            points.push(p);
          }
          this.faces.push(new face.Face(a, b, c));
          break;
      }
    }
    verticies = objData.split('\n');
  }

  Model.prototype.render = function(drawer, scale) {
    var verticies = this.verticies;
    var faces = this.faces;

    for (var f of faces) {
      var a = verticies[f.a - 1],
          b = verticies[f.b - 1],
          c = verticies[f.c - 1];
      drawer.line(a,b, 'white', scale);
      drawer.line(a,c, 'white', scale);
      drawer.line(b,c, 'white', scale);
    }
  }

  Model.prototype.moveX = function(dist) {
    for (var vertex of this.verticies)
      transforms.moveX(vertex, dist);
  }

  Model.prototype.moveY = function(dist) {
    for (var vertex of this.verticies)
      transforms.moveY(vertex, dist);
  }

  Model.prototype.rotateY = function(rad) {
    for (var vertex of this.verticies)
      transforms.rotatePointY(vertex, rad);
  }

  Model.prototype.applyOrtho = function(rad) {
    for (var vertex of this.verticies)
      transforms.rotateOrthoPoint(vertex, rad);
  }

  Object.defineProperty(Model, 'faces', {
    get: function() {
      return this.faces;
    }
  });

  Object.defineProperty(Model, 'verticies', {
    get: function() {
      return this.verticies;
    }
  });

  return {
    Model: Model
  }
});
