var fix;
var move;

function setup() {
  createCanvas(800,800);
  fix = createSprite(375,350,50,50);
  fix.shapeColor = "blue"
  move = createSprite(500,175,70,50);
  move.shapeColor = "blue"
  fix.debug = false;
  move.debug = false;

}

function draw() {
  background(255,255,255);  
  
  console.log (move.x - fix.x)

  if (mousePressedOver(move)) {
    move.x = World.mouseX;
    move.y = World.mouseY;
  }

  if (move.x - fix.x <= move.width/2 + fix.width/2 && move.y - fix.y <= move.height/2 + fix.height/2 
   && fix.x - move.x <= move.width/2 + fix.width/2 && fix.y - move.y <= move.height/2 + fix.height/2) {
    move.shapeColor = "red"
    fix.shapeColor = "red"
  } else {
    move.shapeColor = "blue"
    fix.shapeColor = "blue"
  }

  drawSprites();
}