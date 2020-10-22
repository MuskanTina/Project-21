var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(100,100,50,50);
  o1.shapeColor = "orange";

  o2 = createSprite(200,100,50,50);
  o2.shapeColor = "pink";

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "yellow";

  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "pink";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  console.log(movingRect.x);

  if (isTouching(movingRect,o2)) {
    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    o2.shapeColor = "blue";
  }


  drawSprites();
}

function isTouching(obs1,obs2){

  if (obs1.x - obs2.x < obs2.width/2 + obs1.width/2
    && obs2.x - obs1.x < obs2.width/2 + obs1.width/2
    && obs1.y - obs2.y < obs2.height/2 + obs1.height/2
    && obs2.y - obs1.y < obs2.height/2 + obs1.height/2)
    {
  return true;
 }
 else {
  return false;
 }

}

