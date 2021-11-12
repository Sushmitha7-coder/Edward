class Boat {
    constructor(x,y,w,h,boatPos){
        this.w=w;
        this.h=h;
        this.boatPosition=boatPos;
        this.image=loadImage("assets/boat.png");
        this.body=Bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.w,this.h);
        pop();
      
    }
    }
