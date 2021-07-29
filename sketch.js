var box;
function setup() {
  createCanvas(800,600);
box=createSprite(200,300,50,50)
}

function draw() 
{
  background("yellow");
  if(keyDown(RIGHT_ARROW))
  {
    box.position.x=box.position.x+2
  }
  if(keyDown(LEFT_ARROW))
  {
    box.position.x=box.position.x-2
  }
  if(keyDown(UP_ARROW))
  {
    box.position.y=box.position.y-2
  }
  if(keyDown(DOWN_ARROW))
  {
    box.position.y=box.position.y+2
  }
drawSprites()
}




