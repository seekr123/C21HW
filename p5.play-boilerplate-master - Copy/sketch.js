var bullet, wall;
var speed,weight,thickness;

function setup() {

  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor='white'
  wall=createSprite(1200, 200, thickness,800);
  wall.shapeColor=rgb(225,225,225);
  speed= random (223,321) ;
  weight= random(30,52);
  thickness=random(22,83)
}

function draw() {
  background(0);  
  bullet.velocityX=speed/4;
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= (0.5* weight* speed* speed)/(thickness*thickness*thickness);
    if (damage<10){
      wall.shapeColor='green'
    }
      if (damage>10){
      wall.shapeColor='red'
    }
  }

 drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
 return true;
}
else{
  return false;
}
}
