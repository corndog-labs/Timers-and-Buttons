/***********************************************************************************
  BUTTONS AND TIMERS
  by COURTNEY CROTHER 
  Timer by Scott Kidall 
  
  DESCRIPTION:
  Very simple example of buttons and timers
  this makes you pick between two animal crossing charaters 

need help with making the buttons clickable - maybe I am doing the functions wrong  
***********************************************************************************/

// Global Variables
var tiaButton;
var pietroButton;
var simpleTimer;
var yTextPos = 60;
let bg;

//images 
imgAnimal = [];

function preload() {
	//load images
	imgAnimal[0] = loadImage('assets/Tia_NH.png');
	imgAnimal[1] = loadImage('assets/Pietro_NH.png');

}

//center things, call timers and buttons

function setup() {
	bg = loadImage('assets/acnh_back.jpg');
  	createCanvas(1990, 1080);
	// imageMode(CENTER);
	textAlign(CENTER);
	textSize(25);
 
 	//make simple timer 10 seconds 
  	simpleTimer = new Timer(10000);
  	simpleTimer.start();

 	// make buttons
	makeTiaButton();
	makePietroButton();
	//make functions 
	makeDrawCorrect();
	makeDrawWrong();
 }


 function draw() {
  background(bg);
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
	tiaButton.locate(2*(width/7) - tiaButton.width/2, height/1.5 - tiaButton.height/2);

	tiaButton.onPress = tiaButtonPressed;
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
	pietroButton.locate(2*(width/3) - pietroButton.width/2, height/1.5 - pietroButton.height/2);

	pietroButton.onPress = pietroButtonPressed;
}

 function makeDrawWrong () {
	textSize(40);
	fill(0, 0, 255 );
	text('Wrong answer', 1000 , 500);

}

 function makeDrawCorrect () {
	textSize(40);
	fill(0, 225, 0 );
	text('Correct', 1000, 500);
}

tiaButtonPressed = function() {
	drawFunction = makeDrawWrong;

}

pietroButtonPressed = function() {
	drawFunction = makeDrawCorrect;
	
}


function updateTimer() {
  if( simpleTimer.expired() ) {
  	fill(255,0,0);
	textSize(100);
	text( "Out of Time!", 1000, 500);
	frameRate(2);
  }
  else {
  		fill(200, 30, 90);
    	text( Math.round(simpleTimer.getRemainingTime()/1000), width/2, yTextPos )
  }
}




