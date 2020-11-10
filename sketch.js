var wall,car;
var speed1, weight;



function setup() {
  createCanvas(1600,400);
  speed1 = random(55,290);
  weight = random(400,1500);

  car=createSprite(400, 200,100,20);
  car.shapeColor="white";
  car.velocityX = speed1;

  wall=createSprite(1200,200,50,200);
  
  wall.shapeColor=rgb(80,80,80);

  
 
}

function draw() {
  background("yellow"); 

 deformation =0.5*weight*speed1*speed1/22500 ;

 if(wall.x- car.x<wall.width/2+car.width/2
  ){
   
   car.velocityX = 0;

   if(deformation>180){
    car.shapeColor="red";
  }
  if(deformation<100){
    car.shapeColor="green";
  }

  if(deformation>=100 && deformation<=180){
    car.shapeColor="purple";
  }

}

  drawSprites();

  text("Speed:="+Math.round(speed1),1000,20);
  text("Weight="+Math.round(weight),1000,50);
  text("Deformation="+Math.round(deformation),1000,80);


}




