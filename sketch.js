
var fixedRect, movingRect;
var gameObject1, gameObject2;
var harry
function setup() {
  createCanvas(1200,800);
 harry=createSprite(100,100,10,10);
 harry.shapeColor="blue"
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
else if(isTouching(movingRect,harry)){
  movingRect.shapeColor = "blue";
  harry.shapeColor = "purple";
}
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
harry.shapeColor="blue"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


