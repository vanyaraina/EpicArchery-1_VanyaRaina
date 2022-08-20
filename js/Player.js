class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.
//Matter.Bodies.rectangle(x, y, width, height, [options])

this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, options)

    this.width = width;
    this.height = height;
    this.x = x
    this.y = y
    this.image = loadImage("assets/player.png");
  }

 
  display() {
    // var pos = this.body.position;
    // var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
