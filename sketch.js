
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState="onSling"
var stand,box1,box2,box3,ball,chain
var score=0;
function preload(){
  getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stand=new Stand(600,400,200,20)
  box1=new Box(600,350,50,80)
  box2=new Box(600,300,80,40)
  box3=new Box(600,250,50,80)
	//ball
  ball=new Ball(150,200,20)
  //chain
  chain=new Chain(ball.body,{x:150,y:200})

  //code for seeing the actual physics engine body
  var render = Matter.Render.create({ element: document.body, engine : engine, options :
  { width : 800, height : 700, showAngleIndicator : true, wireframes : true } })
   Matter.Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  if(backgroundImg){
    background(backgroundImg);
  }
  
  textSize(20)
  text("Score : "+score,600,90)
  //score
  box1.score()
  box2.score()
  box3.score()
  
  stand.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  chain.display()


}

function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){
          Matter.Body.setPosition(ball.body,{ x:150 , y:20 })
          chain.attach(ball.body);
          gameState ="onSling"
      
     
  }
  
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      
      return false
  }
}


function mouseReleased(){
  if(gameState==="onSling"){
      chain.fly();
      
      gameState = "launched";
  }
 
}


async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour)
  if(hour>=0600 && hour<=18){
      bg = "BTS.jpg";
  }
  else{
      bg = "Night.jpg";
  }

  backgroundImg = loadImage(bg);
  
}