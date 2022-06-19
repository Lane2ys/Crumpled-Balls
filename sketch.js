
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground , wall1 , wall2 ;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);
	wall1 = new Ground(100,680,10,150);
	wall2 = new Ground(200,680,10,100);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
    ball = Bodies.circle(620,200,20,ball_options);
	World.add(world,ball);

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display();
  wall1.display();
  wall2.display();

  ellipse(ball.position.x , ball.position.y,20);

  function vForce()
{
  Matter.Body.applyForce(ball,{x:0 , y:0},{x:0 , y:-1.5});
}
  
  function hForce()
{
  Matter.Body.applyForce(ball,{x:0 , y:0},{x:-0.4 , y:0});
}

  function keyPressed(){
	  if(keyCode === UP_ARROW){
		vForce();
	  }
  }

  function keyDown(){
	if(keyCode === LEFT_ARROW){
	  hForce();
	}
}
  
  
  keyPressed();
  keyDown();
  drawSprites();
 
}



