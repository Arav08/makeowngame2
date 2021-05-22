var knife;

var carrot, carrotGroup;
var broccoli, broccoliGroup;
var cucumber, cucumberGroup;
var zucchini, zucchiniGroup;
var lettuce, lettuceGroup;
var ginger, gingerGroup;
var coriander, corianderGroup;
var basil, basilGroup;
var squash, squashGroup;

function preload(){

}

function setup(){
  createCanvas(1500, 700);

  knife = createSprite(50, 50, 50, 50);
  knife.shapeColor = "blue";
}

function draw(){
  background("black");

  knife.x = mouseX;
  knife.y = mouseY;

  carrotGroup = new Group();
  broccoliGroup = new Group();
  cucumberGroup = new Group();
  zucchiniGroup = new Group();
  lettuceGroup = new Group();
  gingerGroup = new Group();
  corianderGroup = new Group();
  basilGroup = new Group();
  squashGroup = new Group();

  if (carrotGroup.isTouching(knife)){
    carrotGroup.destroyEach();
  }

  if (broccoliGroup.isTouching(knife)){
    broccoliGroup.destroyEach();
  }

  if (cucumberGroup.isTouching(knife)){
    cucumberGroup.destroyEach();
  }

  if (zucchiniGroup.isTouching(knife)){
    zucchiniGroup.destroyEach();
  }

  if (lettuceGroup.isTouching(knife)){
    lettuceGroup.destroyEach();
  }

  if (gingerGroup.isTouching(knife)){
    gingerGroup.destroyEach();
  }

  if (corianderGroup.isTouching(knife)){
    corianderGroup.destroyEach();
  }

  if (basilGroup.isTouching(knife)){
    basilGroup.destroyEach();
  }

  if (squashGroup.isTouching(knife)){
    squashGroup.destroyEach();
  }
  

  spawnCarrot();
  spawnBroccoli();
  spawnCucumber();
  spawnZucchini();
  spawnLettuce();
  spawnGinger();
  spawnCoriander();
  spawnBasil();
  spawnSquash();

  drawSprites();
}

function spawnCarrot(){
 if (frameCount % 50 === 0){
    carrot = createSprite(1500, Math.round(random(50, 650)), 50, 50);
    carrot.velocityX = -10;
    carrot.shapeColor = "#cf7b0e";
    carrotGroup.add(carrot)

 }
}

function spawnBroccoli(){
  if (frameCount % 59 === 0){
     broccoli = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     broccoli.velocityX = -12;
     broccoli.shapeColor = "#078c46";
     broccoliGroup.add(broccoli);
 
  }
 }

 function spawnCucumber(){
  if (frameCount % 68 === 0){
     cucumber = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     cucumber.velocityX = -12;
     cucumber.shapeColor = "#076b36";
     cucumberGroup.add(cucumber);
 
  }
 }

 function spawnZucchini(){
  if (frameCount % 72 === 0){
     zucchini= createSprite(1500, Math.round(random(50, 650)), 50, 50);
     zucchini.velocityX = -12;
     zucchini.shapeColor = "#07913a";
     zucchiniGroup.add(zucchini);
 
  }
 }

 function spawnLettuce(){
  if (frameCount % 78 === 0){
     lettuce = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     lettuce.velocityX = -12;
     lettuce.shapeColor = "#09db57";
     broccoliGroup.add(broccoli);
 
  }
 }

 function spawnGinger(){
  if (frameCount % 87 === 0){
     ginger = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     ginger.velocityX = -12;
     ginger.shapeColor = "#dbbd86";
     gingerGroup.add(ginger);
 
  }
 }

 function spawnCoriander(){
  if (frameCount % 94 === 0){
     coriander = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     coriander.velocityX = -12;
     coriander.shapeColor = "#059c2f";
     corianderGroup.add(coriander);
 
  }
 }

 function spawnBasil(){
  if (frameCount % 98 === 0){
     basil = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     basil.velocityX = -12;
     basil.shapeColor = "#048f2b";
     basilGroup.add(basil);
 
  }
 }

 function spawnSquash(){
  if (frameCount % 105 === 0){
     squash = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     squash.velocityX = -12;
     squash.shapeColor = "#d9d202";
     squashGroup.add(squash);
 
  }
 }

// --> switch case (8 vegetables)