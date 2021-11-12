const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world,tower,ground,ball,boat;
var bg,towerimg;

function preload(){
    bg=loadImage("assets/background.gif");
    towerimg=loadImage("assets/tower.png");
}

function setup(){
    createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;

    var opt={
        isStatic:true
    }
    ground=Bodies.rectangle(0,height-1,width*2,1,opt);
    World.add(world,ground);

    tower=Bodies.rectangle(160,350,160,310,opt);
    World.add(world,tower);

    angleMode(DEGREES)
    var angle=15;
    cannon=new Cannon(180,110,130,100,angle)
    ball=new CannonBall(cannon.x,cannon.y)
    boat=new Boat(width,height-100,170,170,-100)
}

function draw(){
    background(bg);

    Engine.update(engine);

    rect(ground.position.x,ground.position.y,width*2,1)

    push();
    imageMode(CENTER);
    image(towerimg,tower.position.x,tower.position.y,160,310);
    pop();

    cannon.display();
    ball.display();
    boat.display();
}