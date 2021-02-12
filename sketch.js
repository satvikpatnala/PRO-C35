//Create variables here
var dog,dogSprite,happyDog,database,foodS,foodStock,readStock;
function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dogSprite = createSprite(250,250,50,50);
  dogSprite.addImage(dog);
   dogSprite.scale = .5;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogSprite.addImage(happyDog);
}
  drawSprites();
  text("Press the up arrow to feed the dog",250,50);
  textSize(20);
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=10){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}