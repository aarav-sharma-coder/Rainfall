class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = random(width);
    this.y = random(-50,-10)
        this.width = width;
        this.height = height;
        this.image = loadImage("blue-raindrop-png-4.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(0);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 10, 10);
        pop();
        if(this.y>height){
          this.y = -10;
      }
}
}