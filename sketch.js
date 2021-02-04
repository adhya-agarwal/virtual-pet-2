

var dog,dogImg,dogImg2, happyDog;
var database;
var food, foodStock;

var database;

var feed;
var addfood;
var dfood2;
var dfood3;
var dfood4;
var dfood5;
var dfood6;
var dfood7;
var foodimg, dfood;

function preload()
{
  dogImg2 = loadImage ("happy dog.png")
  dogImg = loadImage ("sad dog.png")
  foodimg= loadImage("food.png")
}

function setup() {
  
	createCanvas(700, 700);
  database = firebase.database()

  dog = createSprite (200,200,50,50)
  dog.scale = 1;
  dog.addImage (dogImg)

  dfood= createSprite(100,150,20,20)
  dfood.scale=0.4
  dfood.addImage(foodimg)

  dfood2=createSprite(200,150,20,20)
  dfood2.scale=0.4;
  dfood2.addImage(foodimg)

  dfood3=createSprite(300,150,20,20)
  dfood3.scale=0.4;
  dfood3.addImage(foodimg)

  dfood4=createSprite(400,150,20,20)
  dfood4.scale=0.4;
  dfood4.addImage(foodimg)

  dfood5=createSprite(500,150,20,20)
  dfood5.scale=0.4;
  dfood5.addImage(foodimg)

  dfood6=createSprite(600,150,20,20)
  dfood6.scale=0.4;
  dfood6.addImage(foodimg)

  dfood7=createSprite(100,150,20,20)
  dfood7.scale=0.4;
  dfood7.addImage(foodimg)
  dfood7.visible=false;

foodStock = database.ref("Food")
foodStock.on("value",readStock)

feed=createButton("Feed the dog")
feed.position(600,100)



addfood=createButton("Add food")
addfood.position(690,100)

addfood.mousePressed(function(){
  dfood7.visible=true;
})


feed.mousePressed(function(){
  dog.addImage (dogImg2,)
  dog.position.x=500;
  dog.position.y=500
  dfood.position.x=500;
  dfood.position.y=400

  
 
})


}






function draw() {  


background  ("lightpink")


if (keyWentDown (UP_ARROW)){
  writeStock(food)
  dog.addImage (dogImg2,)
  dog.position.x=500;
  dog.position.y=500

  

 
}
  
  drawSprites();


  
 textSize(25)
  strokeWeight(3)
  stroke("white")
  fill("lightgreen")
text("PRESS THE BUTTON ONCE TO FEED THE DOG", 60,500)
text("PRESS THE BUTTON ONCE TO ADD FOOD",85,550)

}

function readStock (data){
  
food = data.val()
  
}

function writeStock (x){
if (x <= 0){
  x = 0;
}
else {
  x = x-1;
}
database.ref ("/").update({
  Food : x
})
}

