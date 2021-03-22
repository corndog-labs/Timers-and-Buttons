/***********************************************************************************
  BUTTONS AND TIMERS
  by COURTNEY CROTHER 
  Timer by Scott Kidall 
  
  DESCRIPTION:

  Very simple example of buttons and timers
  this makes you pick between two animal crossing charaters 

***********************************************************************************/
// Global Variables

var tiaButton;
var pietroButton;
var wrongButton
var simpleTimer;
var correctButton;
var yTextPos = 60;

//images 
imgAnimal = [];


//load photos 
function preload() {
	//load images
	imgAnimal[0] = loadImage('assets/Tia_NH.png');
	imgAnimal[1] = loadImage('assets/Pietro_NH.png');
	imgAnimal[2] = loadImage('assets/acnh_back.jpg');
}

//center things, call timers and buttons

function setup() {
  createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	textAlign(CENTER);
	textSize(25);
 
 //make simple timer 10 seconds 
  simpleTimer = new Timer(10000);
  simpleTimer.start();

 	// make buttons
	makeTiaButton();
	makePietroButton();

 }


 function draw() {
  background(255, 255,255);
  frameRate(60);
 
  textSize(45);
  fill(200, 30, 90);
  text("Quickly! Which Villager is cuter?", width/2, height/8);

  //timer
  updateTimer();
 
 //draw buttons
 tiaButton.draw();
 pietroButton.draw();

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

	//make it normal sized 
	tiaButton.width = imgAnimal[0].width;
  	tiaButton.height = imgAnimal[0].height;

	//location of button 
	tiaButton.locate(2*(width/5) - tiaButton.width/2, height/1.5 - tiaButton.height/2);
}


function makePietroButton () {

	//make image a button 
	pietroButton = new Clickable();

	//set image 
	pietroButton.image = imgAnimal[1];
	pietroButton.text = "";

	//no fill or stroke 
	pietroButton.color = '#00000000';
	pietroButton.stroke = '#00000000';

	//make it normal sized 
	pietroButton.width = imgAnimal[1].width;
  	pietroButton.height = imgAnimal[1].height;

	//location 
	pietroButton.locate(2*(width/2.5) - pietroButton.width/2, height/1.5 - pietroButton.height/2);

}


tiaButtonPressed = function() {
	drawFunction = drawWrong;
	text('wrong', 400, 400);

}

pietroButtonPressed = function() {
	drawFunction = drawCorrect;
	
}

drawWrong = function() {
	textSize(20);
	fill(255, 0, 0 );
	text('Wrong', 1000 , 1000);

}

drawCorrect = function() {
	textSize(20);
	fill(0, 225, 0 );
	text('Correct', 1000, 1000);
}

function updateTimer() {
  if( simpleTimer.expired() ) {
  	fill(255,0,0);
	textSize(100);
	text( "Out of Time!", 800, 1000);
	frameRate(2);
  }
  else {
  		fill(200, 30, 90);
    	text( Math.round(simpleTimer.getRemainingTime()/1000), width/2, yTextPos )
  }
}




