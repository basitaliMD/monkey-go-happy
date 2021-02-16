var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
//creating monkey
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
//creating ground
ground = createSprite(400,350,900,100);
ground.velocityX = -4;
ground.X = ground.width/2;
console.log(ground.x);

spawnFood();  
  
//creating new groups
FoodGroup = createGroup;
}

function draw() {
background(225);  
  
if(ground.x<0){
ground.x = ground.width/2;
}
  
if(keyDown("up")){
monkey.velocityY = -12;
}
 
monkey.velocityY = monkey.velocityY + 1.5;
  
monkey.depth = +2;  

monkey.collide(ground);
  
stroke("white");
textSize(20);
fill("white");
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survivalTime: " + survivalTime, 100,50);
  
drawSprites();
}

function spawnFood(){
if(frameCount % 80 === 0){
banana = createSprite(600,250,10,40);
//banana.scale = 0.1;
//banana.addImage(bananaImage);
banana.velocityX = -5;
//banana.lifetime = 80;
//banana.addAnimation(FoodGroup);
 }
}