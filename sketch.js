var bowserImg, goombaImg, koopaTroopaImg, piranhaPlantImg;
var marioImg, peachImg, mario;
var bowserBackground;


function preload()
{
  bowserImg= loadImage("Bowser.jpg");
  goombaImg= loadImage("Goomba.png");
  koopaTroopaImg= loadImage("KoopaTroopa.png");
  marioImg= loadAnimation("Mario1.png", "Mario2.png", "Mario3.png");
  peachImg= loadImage("Peach.png");
  bowserBackground= loadImage("bowserCastleBackground.jpg");
  piranhaPlantImg= loadImage("Piranhaplant.png")

}



function setup() {
  createCanvas(1200,600);

  mario= createSprite(250,350,50,50);
  mario.addAnimation("marioAnimation", marioImg);

  invisibleGround= createSprite(600,500,1200,10);
  invisibleGround.visible= false;
 
}


function draw() {
  background(bowserBackground);  


  if(keyDown( UP_ARROW)){
    mario.velocityY= -15;

  }
  mario.velocityY=mario.velocityY + 0.5;

  mario.collide(invisibleGround);

  

  randEnemy();

  drawSprites();
}


function randEnemy(){
  if( frameCount % 130==0){
    var enemy= createSprite(1100,400, 10,10);
    enemy.velocityX= -2;
     var rand= Math.round(random(1,3));
     switch(rand){
       case 1: enemy.addImage(goombaImg);
       enemy.scale= 0.3;
       break;
       case 2: enemy.addImage(koopaTroopaImg);
       enemy.scale= 0.5;
       break;
       case 3: enemy.addImage(piranhaPlantImg);
       enemy.scale= 0.3;
       break;
       default:
       break;
     }
     enemy.lifetime= 560;

  }

}