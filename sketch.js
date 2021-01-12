
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("images/boy.png");
	
}


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(width/2,600,width,20);
	tree1=new Tree(1050,580);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  tree1.display()
  image(boy ,200,340,200,300);
  
 
  drawSprites();
 
}



