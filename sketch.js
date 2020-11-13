var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Wall1=createSprite(400,650,100,20);
	Wall1.shapeColor=color("red");

	Wall2=createSprite(350,610,20,100);
	Wall2.shapeColor=color("red");

	Wall3=createSprite(450,610,20,100);
	Wall3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	WallA = Bodies.rectangle(400,650,100,20 , {isStatic:true} );
	World.add(world, WallA);

	WallB = Bodies.rectangle(350,610,20,100 , {isStatic:true} );
	World.add(world, WallB);

	WallC = Bodies.rectangle(450,610,20,100 , {isStatic:true} );
	World.add(world, WallC);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  WallA.position.x = Wall1.x;
  WallA.position.y = Wall1.y;

  WallB.position.x = Wall2.x;
  WallB.position.y = Wall2.y;

  WallC.position.x = Wall3.x;
  WallC.position.y = Wall3.y;

if(keyPressed()){
	
}

  drawSprites();

  
 
}

function keyPressed() {
	
if(keyDown(DOWN_ARROW)){

	Matter.Body.setStatic(packageBody,false);

}

}




