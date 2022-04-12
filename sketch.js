var  forestImg, forest;
var ghost, ghostImg 

var boy, boyImg 

var gameState = "play"

var gamestate = "end"



function preload(){
forestImg = loadImage("forest.jpg");
boyImg = loadAnimation("boy1.png","boy2.png", "boy3.png", "boy4.png", "boy5.png");
ghostImg = loadAnimation("ghost.png","ghost8.png","ghost13.png");
obstaclesImg = loadImage ("obstacles.png")
}

function setup() {
createCanvas(800, 500);
forest = createSprite(300,190,600,600);
forest.addImage("forest",forestImg);
forest.velocityX = -1;
forest.scale = 4
ghost= createSprite (100,410,680,50)
ghost.addAnimation ("ghost",ghostImg)
ghost.scale = 0.3
boy= createSprite (300,250,50,50)
boy.addAnimation ("boy", boyImg)
boy.scale = 0.3
obstaclesGroup = new Group ()
ground = createSprite(400,490,800,5)
ground.visible = false
}


function draw() {
    background(0)
    drawSprites()
  boy.collide(ground)
 if (gameState == "play") {
    if(forest.x < 160){
        forest.x = 500
      }
    if (keyDown ("Space")) {
      boy.velocityY = -7
    }
    spawnObstacles ()
    boy.velocityY = boy.velocityY + 0.8
   if (boy.isTouching (obstaclesGroup)) {
      gameState = "end" 
    }
  }
  else if (gameState == "end") {
  forest.velocityX = 0
  obstaclesGroup.setVelocityXEach(0)
    stroke("yellow") 
  fill ("yellow")
  textSize (30)
  text ("Game over", 230,250) 
  boy.velocityY = 0
  ghost.velocityX = 1
  if (ghost.isTouching(boy)) {
    boy.destroy()
    console.log (boy)
  }
  }

}

  
function spawnObstacles (){
  if (frameCount %250 == 0 ) {
  obstacle = createSprite (800,470)
  obstacle.addImage (obstaclesImg)
  obstacle.debug = true
 // obstacle.x = Math.round(random (120,400))
  obstacle.velocityX = -3 
  obstacle.lifetime = 800
  obstacle.scale = 0.09
  obstaclesGroup.add (obstacle) 
  }}