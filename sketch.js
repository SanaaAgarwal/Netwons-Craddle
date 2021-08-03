
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(500, 100, 500, 80);
ball1 = new Ball (300, 300, 50);
ball2 = new Ball (400, 300, 50);
ball3 = new Ball (500, 300, 50);
ball4 = new Ball (600, 300, 50);
ball5 = new Ball (700, 300, 50);

rope1 = new Rope(ball1.body, roof.body, -200, 0)
rope2 = new Rope(ball2.body, roof.body, -100, 0)
rope3 = new Rope(ball3.body, roof.body, 0, 0)
rope4 = new Rope(ball4.body, roof.body, 100, 0)
rope5 = new Rope(ball5.body, roof.body, 200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  roof.display()
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){ 
	 if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,
		{x:-85,y:-85}); } 
	}



