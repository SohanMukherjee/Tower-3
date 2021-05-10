class Ball{
    constructor(x,y,r){
        var options = {restitution:1,friction:1,density:1}
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.radius=r
    }

    display(){
        fill("hotpink")
        circle(this.body.position.x,this.body.position.y,this.radius*2)
        
    }
}