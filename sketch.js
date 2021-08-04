var BgImg;
var snowImg;
var snow;
function preload(){
  BgImg = loadImage("snow3.jpg")
  snowImg = loadImage("smoke.png")
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(BgImg);
  spawnSnow();
  drawSprites();
}
function spawnSnow(){
  snow = createSprite(Math.round(random(30,770)),0,10,10)
  snow.addImage(snowImg)
  snow.scale = 0.5
  snow.velocityY = 2
}