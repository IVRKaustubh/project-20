var cat , cat_running,cat_idle; 
var mouse,mouseImage;

function preload() { //load the images here 
    cat_running=loadAnimation("tomThree.png","tomTwo.png"); 
    
    cat_idle=loadAnimation ("tomFour.png"); 
}

function setup(){ 
    createCanvas(1000,800); 
    //create tom and jerry sprites here 
   cat = createSprite (500,400,20,20);
   cat =addAnimation (running,"cat_running")
}

function draw() { 
    background(255); 
    
    //Write condition here to evalute if tom and jerry collide 
    drawSprites(); 
}

function keyPressed(){ 
    //For moving and changing animation write code here 
}
















