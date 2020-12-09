var banana,obstacle,bananaGroup,obstacleGroup,background1,backgroundimg,score,monkey,monkeyimg,bananaimg,obstacleimg,gameState,gameover,gameoverImg,ground,stone,stoneimg;

function preload(){
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
  backgroundimg=loadImage("jungle.jpg");
  gameoverImg=loadImage("gameOver.png");
}

function setup() {
  createCanvas(400, 400);
  monkey=createSprite(50,343,10,10);
  monkey.addAnimation(monkeyimg);
  background1=createSprite(200,380,800,15);
  ground=createSprite(200,380,400,20);
  ground.x=ground.width/2;
  background1.addAnimation(backgroundimg);
  gameState="play";
  obstacleGroup=new Group();
  bananaGroup=new Group();
  score=0;
}

function draw() {
   if (ground.x < 0){
    ground.x = ground.width/2;
   }
  text("Survival Time: "+score,100,50);
  monkey.collide(ground);
  
  if (gameState==="play"){
    if(keyDown("space") && monkey.y >= 341){
      monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY + 0.8;

    if (monkey.isTouching(bananaGroup)){
      bananagroup.destroyEach();
    }
    bananas();
    obstacles();
    
    score=ceil(frameCount/frameRate);
    if (monkey.isTouching(obstacleGroup)){
    var gameover=createSprite(200,200,20,20);
    gameover.addAnimation("gameover");
    monkey.addImage("monkey1");
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    gameState="end";
    }
  }

  
  
  drawSprites();
}
function obstacles() {
  if (frameCount % 300===0){
    obstacle=createSprite(400,346,20,20);
    obstacle.velocityX=-4;
    obstacle.addImage(stoneimg);                                                                                         
    obstacle.scale=0.15;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}

function bananas(){
  if (frameCount % 80===0){
  rand=random(120,200);
  banana=createSprite(400,rand,10,10);
  banana.velocityX=-5;
  banana.addImage(bananaimg);
  banana.scale=0.05;
  banana.lifetime=100;
  bananaGroup.add(banana);
  }
}