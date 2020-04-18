class Raindrops extends BaseClass{
    
        constructor(){
            super(random(width),random(-50,-10),10,10);
          this.x = random(width);
          this.y = random(-50,-10);
          this.image = loadImage("sprites/blue-raindrop-png-4.png");
          this.yspeed = random(3,7);
        }
        fall(){
          this.y = this.y+this.yspeed;
        }
        display(){
          fill(255);
          image(this.image,this.x,this.y,10,10);
          
          if(this.y>height){
            this.y = -10;
          }
        }
      }