var backgroundImage
var cat, catImg,catImg2, mouse, mouseImg, mouseImg2,mouseImg4

function preload() {
    backgroundImage = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg = loadAnimation("images/mouse4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse1.png");
    mouseImg4 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    mouse = createSprite(500,500,30,30);
    mouse.addImage(mouseImg);
    mouse.scale = 0.5;

    cat = createSprite(700,500,30,30);
    cat.addImage(catImg);
    cat.scale = 0.5;
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseImg4);
        mouse.changeAnimation("mouseHappy");

    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }

  if(keyDown === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

}


}

