class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("square.jpg");
        World.add(world, this.body);
        this.visibility=255
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }else{ push();
          World.remove(world,this.body)
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          //this.visibily=this.visibility-5
          this.visibility-=5
          tint (255,this.visibility)
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();}
       
      }

      score(){
        if (this.visibility < 0 && this.visibility > -505){
          score++;
         
        }
      }
}