var box1,box2;
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  box1= createSprite(400,200,50,30)
  box1.shapeColor = "blue"
 box1.debug = true
  box2=createSprite(400,30,40,40)
  box2.shapeColor = "green"
  box2.debug = true
  box2.velocityY = 2;
}

function draw() {
  background(200,150,50);  
 // box1.x = World.mouseX
 // box1.y = World.mouseY
  if(box1.x - box2.x < box1.width/2 + box2.width/2 && 
    box2.x - box1.x < box2.width/2 + box1.width/2)
    {box1.shapeColor = "red";
     box2.shapeColor = "red";}
     else {
     box1.shapeColor = "blue"
     box2.shapeColor = "green";
     }
     if(box1.y - box2.y < box1.height/2 + box2.height/2 &&
      box2.y - box1.y < box2.height/2 + box1.height/2)
      {box1.shapeColor = "red";
       box2.shapeColor = "red";
      box2.velocityY = box2.velocityY * (-1)
      }

       else {
       box1.shapeColor = "blue"
       box2.shapeColor = "green";
       }
     

  drawSprites();
}