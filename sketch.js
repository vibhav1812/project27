
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,400,20);
	bob1 = new Bob(250,350);
	bob2 = new Bob(320,350);
	bob3 = new Bob(390,350);
	bob4 = new Bob(460,350);
	bob5 = new Bob(530,350);
	rope1 = new Chain(bob1.body,roof1.body,-140,0)
	rope2 = new Chain(bob2.body,roof1.body,-70,0)
	rope3 = new Chain(bob3.body,roof1.body,0,0)
	rope4 = new Chain(bob4.body,roof1.body,70,0)
	rope5 = new Chain(bob5.body,roof1.body,140,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof1.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  console.log(rope1)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-350,y:-350})
	}
}



