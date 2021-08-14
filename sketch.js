var pc, pcImage;
var zombie1, zombie1Image
var zombie2, zombie2Image
function preload() {
  pcImage = loadImage ("images/player.png")
  zombie1Image = loadImage ("images/zombie1.png")
  zombie2Image = loadImage ("images/zombie2.png")
}
function setup() {
  createCanvas(800,400);
  
  pc =   createSprite(400, 200, 50, 50);
pc.addImage(pcImage)

}

function draw() {
  background(255,255,255); 
  spawnZombie1()
  spawnZombie2() 
  drawSprites();
}
function spawnZombie1() {
  if(frameCount%150===0)
  {
    zombie=createSprite(700,Math.round(random(100,300)),70,80)
    zombie.velocityX=-3
    zombie.addImage(zombie1Image)
  }
}
function spawnZombie2() {
  if(frameCount%200===0)
  {
    zombie=createSprite(0,Math.round(random(100,300)),70,80)
    zombie.velocityX=3
    zombie.addImage(zombie2Image)
  }
}