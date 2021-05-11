var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0); 
   movingRect.x=mouseX;
   movingRect.y=mouseY;
   console.log(movingRect.y-fixedRect.y)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)

{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
  drawSprites();
}