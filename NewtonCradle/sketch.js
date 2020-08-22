const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, constraintLog, chain, ;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
            
    
    ground = new Ground(600,height,1200,20);
    

    

    bird = new Bird(100,100);

    constraintLog = new Log(230, 180, 80, PI/2);
    chain = new Slingshot(bird.body);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    bird.display();
    

    constraintLog.display();
    chain.display();
}
