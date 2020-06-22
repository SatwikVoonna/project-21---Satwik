var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, height/2);
  bullet = createSprite(50,200,50,50);
}

function draw() {
  background(0);  
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  thickness = random(22,83);

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var Damage = 0.5 * weight * speed * speed/thickness*thickness*thickness
    if(Damage >= 10){
      bullet.shapeColor = "green";
    }
    if(Damage <= 10){
      bullet.shapeColor = "red";
    }
  }
  if(wall.x - bullet.x < wall.height/2 + bullet.height/2 
    && bullet.x - wall.x < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2){
      
      
    bullet.velocityX = 1;
  }
    
  drawSprites();
}