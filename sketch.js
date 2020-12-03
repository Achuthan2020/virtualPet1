//Create variables here
var dogStandingImg,dogTailwhippingImg,dog,food;
function preload()
{
  //load images here
  dogStandingImg=loadImage("images/dogImg.png")
  dogTailwhippingImg=loadImage("images'dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createsprite(400,400,30,80);
  dog.addImage("dogStandingImg",images/dogStandingImg.png)
  
}


function draw() {  

  drawSprites();
  //add styles here

}



