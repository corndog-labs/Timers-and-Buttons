/***********************************************************************************
  BUTTONS AND TIMERS
  by COURTNEY CROTHER 
  
  DESCRIPTION:

  Very simple example of buttons and timers
  this makes you pick between two animal crossing charaters 

***********************************************************************************/
// Global Variables

var pickButton; 
var tiaButton;
var pietroButton;
var wrongButton
var simpleTimer;

//images 
imgAnimal = [];


//load photos 
function preload() {

	//images
	imgAnimal[0] = loadImage('assets/Tia_NH.png');
	imgAnimal[1] = loadImage('assets/Pietro_NH.png');
	imgAnimal[2] = loadImage('assets/acnh_back.jpg');
}

//center things, call functions 

function setup() {
  createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	textAlign(CENTER);
	textSize(25);
 
 //make simple timer
  simpleTimer = new Timer(1000);
  simpleTimer.start();

 	// makeWrongButton()
	makePickButton();
	makeTiaButton();
	makePietroButton();
	drawTimer();
 }


 function draw() {
  background(0);
  updateTimer();

  textSize(25);
  fill(255,0,0);
  text("Which Villager is cuter?", width/2, height/2);
 
 //draw buttons
 tiaButton.draw();

}

function updateTimer() {
  if( simpleTimer.expired() ) {
  	elapsedSeconds++;
  	simpleTimer.start();
  }
}

function makePickButton () {

}


function makeTiaButton(){

	//make image a button
	tiaButton = new Clickable();
	// set image
	tiaButton.image = imgAnimal[0]; 
	tiaButton.text = "";

	//no fill or stroke
	tiaButton.color = '#00000000';
	tiaButton.stroke = '#00000000';

	//location of button 
	tiaButton.locate(2*(width/3) - tiaButton.width/2, height/2 - tiaButton.height/2);

}


function makePietroButton () {

	//make image a button 
	pietroButton = new Clickable();

	//set image 
	pietroButton.image = pietro;
	pietroButton.text = "";

}


tiaButtonPressed = function() {
	drawFunction = drawWrong;

}

pietroButtonPressed = function() {
	drawFunction = drawWrong;
	
}

drawWrong = function() {


}




