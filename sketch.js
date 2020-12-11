
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1;
var d1;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.

	ground= new Ground(400, 390, 800, 20);
	d1= new Dustbin(500, 280);
	paper1= new paper(70, 100, 50);
	

	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  paper1.display();
  ground.display();
  d1.display();
  

  if(keyWentDown("UP_ARROW")) {

	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:265, y:-330})

  }
 
}



