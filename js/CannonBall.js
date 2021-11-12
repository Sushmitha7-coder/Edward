class CannonBall {
    constructor(x,y){
        this.r=30;
        this.cannonballimg=loadImage("assets/cannonBall.png");
        var opt={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.r,opt);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.cannonballimg,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
    }
