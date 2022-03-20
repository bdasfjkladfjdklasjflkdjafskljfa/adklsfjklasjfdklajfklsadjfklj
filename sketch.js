
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var wall;
var wall2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options ={
    restitution: 1, frictionAir:0.02
  }
  var ball2_options ={
    restitution: 1, frictionAir:0.1
  }
  var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,200,25,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,200,40,ball2_options);
  World.add(world,ball2);

  wall = Bodies.rectangle(390,190,20,381,ground_options);
  World.add(world,wall);
  
  wall2 = Bodies.rectangle(10,190,20,381,ground_options);
  World.add(world,wall2);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,25);
  ellipse(ball2.position.x,ball2.position.y,40)
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,20,381);
  rect(wall2.position.x,wall2.position.y,20,381);
}

