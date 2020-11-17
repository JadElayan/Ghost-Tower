var tower, towerim;
var ghost, ghostim
var door, doorim;

function preload() {
  
towerim = loadImage("tower.png")
ghostim = loadImage("ghost-standing.png")
doorim = loadImage("door.png")
} 


function setup() {
createCanvas(600,600)
  
tower = createSprite(300,300)
 tower.addImage(towerim)
 tower.velocityY = 1;

 ghost = createSprite(300,300,30,30)
 ghost.scale = 0.3;
 ghost.addImage(ghostim)
 
}

function draw() {
  background("purple")
  
  
if (tower.y > 400){
tower.y = 300


}

ghost.velocityY = ghost.velocityY + 0.8
  
 
  if(keyDown("space")) {
    ghost.velocityY = -12
  }

  if(keyDown("right_arrow")) {
    ghost.x = ghost.x + 5
    
  }
  
 if(keyDown("left_arrow")) {
    ghost.x = ghost.x -5
    
  }

 spawnDoors();

drawSprites()
}

function spawnDoors() {
  if (frameCount % 240 === 0) {
  door = createSprite(random(100,500),-10)
  door.velocityY = 2;
    door.addImage(doorim);
  
  

  
}
}