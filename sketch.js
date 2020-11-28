var car1,car2,car3,car4;
var wall1,wall2,wall3;
var deformation;
var speed,weight;


function setup() {
  createCanvas(1200,400);
  
  car1=createSprite(1100, 40, 50, 50);
  car1.shapeColour="white";
  car1.velocity=speed;

  car2=createSprite(1100, 150, 50, 50);
  car2.shapeColour="red";
  car2.velocity=speed;


  car3=createSprite(1100, 260, 50, 50);
  car3.shapeColour="yellow";
  car3.velocity=speed;


  car4=createSprite(1100, 370, 50, 50);
  car4.shapeColour="green";
  car4.velocity=speed;


  wall1=createSprite(1500,200,60,height/2);
  wall1.shapeColour="white";

  
  wall2=createSprite(1500,500,60,height/2);
  wall2.shapeColour="white";

  
  wall3=createSprite(1500,900,60,height/2);
  wall3.shapeColour="white";

speed=random=(55,90);
weight=random(400,1600);



}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velociyX=0;
    var deformation=0.5 * weight * speed *spedd/22509
    if(deformatiom>180)
    {
      car.shapeColour=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shhapeColor=color(230,230,0);
    }
    if (deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }



  drawSprites();
}