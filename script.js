/* ---- particles.js config ---- */

particlesJS("estars", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":500
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
particlesJS("estars2", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area":500
        }
      },
      "color": {
        "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  (function () {
    'use strict';
    window.addEventListener('load', function() {
      var canvas = document.getElementById('canvas');
  
      if (!canvas || !canvas.getContext) {
        return false;
      }
  
      /********************
        Random Number
      ********************/
  
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
  
      /********************
        Var
      ********************/
  
      // canvas 
      var ctx = canvas.getContext('2d');
      var X = canvas.width = window.innerWidth;
      var Y = canvas.height = window.innerHeight;
      var mouseX = X / 2;
      var mouseY = Y / 2;
  
      /********************
        Animation
      ********************/
  
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(cb) {
          setTimeout(cb, 10);
        };
  
      /********************
        flowers
      ********************/
      
      var maxRadius = 30;
      var flowerNumX = X / (maxRadius * 4) + 1;
      var flowerNumY = Y / (maxRadius * 4) + 1;
      var flowers = [];
  
      function Flower(ctx, x, y) {
        this.ctx = ctx;
        this.init(x, y);
      }
      Flower.prototype.init = function(x, y) {
        this.x = x;
        this.y = y;
        this.a = 0;
        this.rad = this.a * Math.PI / 180;
        this.dist = 0;
        this.r = maxRadius / 2;
        this.c = {
          r: rand(0, 255),
          g: rand(0, 255),
          b: rand(0, 255)
        };
        this.flg = false;
      };
      Flower.prototype.draw = function() {
        var ctx = this.ctx;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = 'rgb(' + this.c.r + ', ' + this.c.g + ', ' + this.c.b + ')';
        ctx.globalAlpha = 0.3;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rad);
        ctx.translate(-this.x, -this.y);
        for (var i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.arc(Math.cos(60 * Math.PI / 180 * i) * this.dist + this.x, Math.sin(60 * Math.PI / 180 * i) * this.dist + this.y, this.r, 0, Math.PI * 2, false);
          ctx.fill();
        }
        ctx.restore();
      }
      Flower.prototype.updateParams = function() {
        if (this.flg === false) {
          this.r += maxRadius * 0.01 * 0.25;
          this.dist += maxRadius * 0.005;
          this.a += maxRadius * 0.005;
        }
        if (this.flg === true) {
          this.r -= maxRadius * 0.01 * 0.25;
          this.dist -= maxRadius * 0.005;
          this.a -= maxRadius * 0.005;
        }
        if (this.dist < 0) {
          this.changeColor();
        }
        this.rad = this.a * Math.PI / 180;
      };
      Flower.prototype.changeColor = function() {
        this.c = {
          r: rand(0, 255),
          g: rand(0, 255),
          b: rand(0, 255)
        };
      };
      Flower.prototype.render = function() {
        this.updateParams();
        this.turning();
        this.draw();
      };
      Flower.prototype.turning = function() {
        if (this.dist > maxRadius) this.flg = true;
        if (this.dist < 0) this.flg = false; 
      };
  
      for (var i = 0; i < flowerNumX; i++) {
        for (var j = 0; j < flowerNumY; j++) {
          var flower = new Flower(ctx, maxRadius * 4 * i, maxRadius * 4 * j);
          flowers.push(flower);
        } 
      }
  
      /********************
        Render
      ********************/
      
      function render(){
        ctx.clearRect(0, 0, X, Y);
        for (var i = 0; i < flowers.length; i ++) {
          flowers[i].render();
        }
        requestAnimationFrame(render);
      }
  
      render();
  
      /********************
        Event
      ********************/
      
      // resize
      function onResize() {
        X = canvas.width = window.innerWidth;
        Y = canvas.height = window.innerHeight;
        mouseX = X / 2;
        mouseY = Y / 2;
        flowerNumX = X / (maxRadius * 4) + 1;
        flowerNumY = Y / (maxRadius * 4) + 1;
        flowers = [];
        for (var i = 0; i < flowerNumX; i++) {
          for (var j = 0; j < flowerNumY; j++) {
            var flower = new Flower(ctx, maxRadius * 4 * i, maxRadius * 4 * j);
            flowers.push(flower);
          } 
        }
      }
      window.addEventListener('resize', function() {
        onResize();
      });
  
    });
    // Author
    console.log('File Name / flowers.js\nCreated Date / May 18, 2020\nAuthor / Toshiya Marukubo\nTwitter / https://twitter.com/toshiyamarukubo');
  })();
  $('.carousel-3d-basic').mdbCarousel3d();

  