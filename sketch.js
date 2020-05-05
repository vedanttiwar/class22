const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution:0.5
    }
  
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ground);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,20,20);
}