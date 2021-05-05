
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	
	var option={
		isStatic:true
		}

	
	


    ground=new Ground(400,600,800,30,option)
    
	bin1=new Ground(670,550,15,100,option)
	bin2=new Ground(620,590,100,15,option);
	bin3=new Ground(565,550,15,100,option);

	
	dust=new Trash(100,100,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  
 bin1.display();
 bin2.display();
 bin3.display();
 ground.display();
 
 dust.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(dust.body,dust.body.position,{x:85,y:-85});
	}
}

