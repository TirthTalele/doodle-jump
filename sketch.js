var doodle ,doodle1img ,doodle2img ,pageimg ,page;
var gamestate="play";
var greenGroup,brownGroup;
var invisibleBlock;
var blockpresent = 1;
function preload(){  
  pageimg = loadImage("back.png");
  doodle1img = loadAnimation("doodle_left-removebg-preview.png");
  doodle2img = loadAnimation("right.png");
}
function setup(){
createCanvas(600,800)  
 page= createSprite (300,400,600,800);  
 page.addImage(pageimg);
 page.scale=1.25;
  doodle= createSprite(300,300,50,50);
 doodle.addAnimation("left",doodle1img);
 doodle.addAnimation("right",doodle2img);
// doodle.debug = true;
 doodle.scale = 0.6;
 invisibleBlock= createSprite(300,310,600,10);
 invisibleBlock.visible = false;
  //define Groups
   greenGroup= new Group(); 
  brownGroup= new Group();
   
}

function draw(){
  background(0);
  if(gamestate==="play"){
    //reset background
 if (page.y>500){
  page.y=400; 
 }
  page.velocityY = 2;
  doodle.collide(invisibleBlock);
    if(keyDown("right")){
    doodle.x = doodle.x + 3;
    doodle.changeAnimation("right",doodle2img);
  }
  if(keyDown("left")){
    doodle.x = doodle.x - 3;
    doodle.changeAnimation("left",doodle1img);
  }
 
  //doodle comes down
  doodle.velocityY = doodle.velocityY + 0.5;
   
  if(greenGroup.isTouching(doodle)){
    doodle.velocityY = 0;
    if(keyDown("up")){
      doodle.velocityY = -3;
    }
   
    if(blockpresent === 1){
      invisibleBlock.destroy();
      blockpresent = 0;
    }
    
   }

   if(brownGroup.isTouching(doodle)){
    doodle.velocityY = 0;
    if(keyDown("up")){
      doodle.velocityY = -3;
    }
   brownGroup.destroyEach();
        
   }
 /*  if(ghost.isTouching(invisiblegroup)){
     gamestate="end";
     ghost.destroy();
   doorgroup.destroyEach();
   climbergroup.destroyEach();
  invisiblegroup.destroyEach();
   }
   */    
  }
  
  
  
  SpawnGreen();
  SpawnBrown();
  drawSprites(); 
 if (gamestate==="end"){
  stroke("yellow"); 
   fill("yellow");
   textSize(30);
   text("Game Over", 230,250) 
                                
 }
  
}
//generate/spawn the green platform
function SpawnGreen(){
  
if(frameCount%60===0){
  green= createSprite(300,-10,50,10);
  green.shapeColor = "green";
//  green.addImage( doorImg);
  green.velocityY =1 ;
  green.x=Math.round(random (100,500));
  green.depth=doodle.depth;
  doodle.depth++;
  green.lifetime=700;
  
 greenGroup.add(green);
   
}  
}
function SpawnBrown(){
  
  if(frameCount%120===0){
    brown= createSprite(300,-10,50,10);
    brown.shapeColor = "brown";
  //  green.addImage( doorImg);
  brown.velocityY =1 ;
  brown.x=Math.round(random (100,500));
  brown.depth=doodle.depth;
  brown.depth++;
  brown.lifetime=700;
    
   brownGroup.add(brown);  
  }  
  
}
  
  



