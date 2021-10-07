
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,World,bath1,bath2,brush,bg;
var drink1,drink2,eat1,eat2,gym1,gym2;
var gum11,gym12,iss,move,move1,sleep;

function setup()
createCanvas(800, 700);
rectMode(CENTER)
{
engine = Engine.create();
world = Engine.world();
}
function preload(){
  bg = loadImage("images/iss.png");
  sleep =loadImage("images/sleep.png");
  brush =loadImage("images/brush.png");
  gym1 = loadImage("images/gym12.png" ,"images/gym22.png");
  eat = loadImage("images/eat1.png" ,"images/eat2.png");
  drink = loadImage("images/drink1.png" ,"images/drink2.png");
  move = loadImage("images/move.png" ,"images/move1.png");

  background(0);

}

//Create the Bodies Here.
paper1 = new Paper(200,600,10);
ground = new Ground(800,600,1000,20);
dustbin1 = new Dustbin(1100,680,100,20);
dustbin2 = new Dustbin(1740,620,20,100);
dustbin3 = new Dustbin(1150,620,20,100);
groundObj = new Ground(width/2 , 670, width,20 );
leftside = new ground(1100,600,200,120);

//create astronaut here
astranout = createSprite(300,230);
astronaut.addAnimation("sleeping" ,sleep);
astronaut.scale = 0.1;

//code to move astranaut
if(keyDown(UP_ARROW)) {
  astronaut.addAnimation("brushing" ,brush);
  astronaut.changeAnimation("brushing");
  astranout.Y = 350;
  astranout.velocityX = 0;
  astranout.velocityY = 0;

  if(keyDown(DOWN_ARROW))
  astronaut.addAnimation("gymming" ,gymming);
  astranout.changeAnimation("gymming");
  astranout.Y = 350;
  astranout.velocityX = 0;
  astranout.velocityY = 0;

  if(keyDown(LEFT_ARROW))
  astronaut.addAnimation("eating" ,eating);
  astranout.changeAnimation("eating");
  astranout.Y = 350;
  astranout.velocityX = 0;
  astranout.velocityY = 0;

  if(keyDown(RIGHT_ARROW))
  astronaut.addAnimation("bathing" ,bathing);
  astranout.changeAnimation("bathing");
  astranout.Y = 350;
  astranout.velocityX = 0;
  astranout.velocityY = 0;

  if(keyDown(M_KEY))
  astronaut.addAnimation("moving" ,moving);
  astranout.changeAnimation("moving");
  astranout.Y = 350;
  astranout.velocityX = 0;
  astranout.velocityY = 0;

}
Engine.run(engine);	

	
drawSprites();


	
	
	
	

  
 


 {
  
  
 
}