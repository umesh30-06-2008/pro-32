const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg)
    }

    Engine.update(engine);



    // write code to display time in correct format here



}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    console.log(responseJSON);
    var dt = responseJSON.datetime;
    console.log(dt)
    var hour = dt.slice(11,19)
    console.log(hour)
    if(hour>=06 && hour<=19){
      bg = "sprites/bg.png"
    }
      else{
          bg = "sunrise1.png"
       }
       
      backgroundImg = loadImage(bg)
      console.log(backgroundImg);


       // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg="sunrise1.png";
   }else if(hour>=07 && hour<08){
        bg="sunrise2.png";
   }else if(hour>=23 && hour<0){
       bg="sunrise10.png";
   }else if(hour>=0 && hour<03){
       bg="sunrise11.png";
   }else{
       bg="sunrise12.png";
   }
  
}
