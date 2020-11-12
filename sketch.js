var fr,mr1;
var go1,go2;

function setup() {
  createCanvas(800,400);
 
 fr=createSprite(200,0,50,50);
 mr1= createSprite(200,400, 50, 50);
 fr.debug=true;
 mr1.debug=true;
mr1.velocityY=-5;
fr.velocityY=5;

mr= createSprite(400, 200, 50, 50);
 go1 = createSprite(100,100,50,50);
 go1.shapeColor = "yellow";

}
function draw() {
  background(0);  
 
  mr.x=World.mouseX;
mr.y=World.mouseY;


if( isTouching(mr, go1)){
  mr.shapeColor="red";
  go1.shapeColor="red";
}
else {
mr.shapeColor="blue";
go1.shapeColor="blue"
}
 bounceOff(mr1,fr)
 
  drawSprites();
}
