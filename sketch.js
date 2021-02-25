/***********************************************************************************
  Rooms of a House
  by Sebastian Rojas
  Shows navigation structure using the keyboard between 4 rooms
  []
  Template:
  (1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
  (2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
  (3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section
  Also start your localhost before running this, otherwise no PNGs will display
------------------------------------------------------------------------------------
  The way it works — you don't need to know this for the template use
  * array of images gets loaded at startup
  * drawFunction is a VARIABLE that points to a function varible name
  * draw_blank_Room(s) are set to be the functions.
  * the keys '1, 2, 3, 4, 5, 6' will change the drawFunction variable
------------------------------------------------------------------------------------
  Notes:
  - a more advanced state machine with use array-indexing for each of
    images the draw functions, but this is just for illustrative purposes
  - even more advanced will be to put the draw functions into an array, would
    be helpful for randomizing, go to the next function, etc
  - next step after that would be to put interfaces into an array that maps to
    the functions
***********************************************************************************/

// variable that is a function 
var drawFunction;

//image variables
var livingRoomAssets = [];
var GaragenAssets = [];
var StudioRoomAssets = [];
var bedroomAssets = [];
var bathroomAssets = [];
var GardenAssets = [];

//furniture placement variables

var couchX = 92;
var couchY = 305;
var lampX = 12;
var lampY = -114;

//room color array
var roomColors = [];

//navigation instruction bar variables
var xNav = 500;
var yNav = 11;
var hNav = 40;
var wNav = 240;
var navFill = 255;

var navTextXPos = (xNav + (740 - xNav)/2);
var navTextYPos = (yNav + (hNav/2) + 9);
var navTextSize = 26;
var strings = ['use keys to nav'];

//bounding box navigation key  variables
var bnd = 40;
var xKyBnd = 749;  //postion 1 on bounding box
var yKyBnd = 11;  //postion 1 on bounding box
var bndSpcr = 51; //spacer between keys

//navigation key placement variables
var xKeyPlace = (xKyBnd + (789 - xKyBnd)/2);
var yKeyPlace = (yKyBnd + (bnd/2) + 7);

//navigation key array
var navKey = [];

//room title bounding box variables
var xStartOne = 604;
var yStartOne = 543;
var xEndOne = 185;
var yEndOne = 40;
var titleFill = 0;

//room title variables
var textXPos = (xStartOne + (789 - xStartOne)/2);
var textYPos = (yStartOne + (yEndOne/2) + 9);

//preload images in array
function preload() {

  //livingroom images
  livingRoomAssets[0] = loadImage('assets/fireplace.png');
  livingRoomAssets[1] = loadImage('assets/kitchen.png');
  livingRoomAssets[2] = loadImage('assets/sofa.png');

 //Garage images
  kitchenAssets[0] = loadImage('assets/motorcycle.png');
  kitchenAssets[1] = loadImage('assets/truck.png');
  
  //Studio images
  diningRoomAssets[0] = loadImage('assets/computer.png');
  diningRoomAssets[1] = loadImage('assets/printer.png');
  diningRoomAssets[2] = loadImage('assets/fridge.png');
  
  //bedroom images
  bedroomAssets[0] = loadImage('assets/bed.png');
  bedroomAssets[1] = loadImage('assets/hammock.png');


  //bathroom images
  bathroomAssets[0] = loadImage('assets/toilet.png');
  bathroomAssets[1] = loadImage('assets/shower.png');

  //Garden images
  officeAssets[0] = loadImage('assets/garden.png');
  officeAssets[1] = loadImage('assets/hammock.png');
  officeAssets[2] = loadImage('assets/cage.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(28);
  noStroke();

  //seting the room color array
  roomColors[0] = color(210, 100, 38); //living room color
  roomColors[1] = color(251, 196, 219); //Garage color
  roomColors[2] = color(20, 201, 150); //Studio room color
  roomColors[3] = color(138, 147, 111); //bedroom color
  roomColors[4] = color(150, 201, 201); //bathroom color
  roomColors[5] = color(100, 98, 98); //Garden  color

  //setting the navigation key array
  navKey[0] = ('[1]');
  navKey[1] = ('[2]');
  navKey[2] = ('[3]');
  navKey[3] = ('[4]');
  navKey[4] = ('[5]');
  navKey[5] = ('[6]');

  // set to one for startup
  drawFunction = drawLivingRoom;

}

//calls your state machine function
function draw() {
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//draws images from livingRoomAssets array
drawLivingRoom = function() {
   background(roomColors[0]);

   //images in array
   image(livingRoomAssets[0], couchX, couchY);  //couch
   image(livingRoomAssets[1], lampX, lampY);  //lamp
   
   //text bounding box
   fill(roomColors[0]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

  //  //room title
   fill(titleFill);
   text('[1]living room', textXPos, textYPos); 

  //  //nav keys
  //  //bounding position one
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

  //  //key text position one
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace);
  
  // //bounding position two
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

  //  //key text position two
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + bndSpcr);  

  //  //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr); 

  //  //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);
}

//draws images from kitchenAssets array
drawGarage = function() {
  background(roomColors[1]);

   //images in array
   image(kitchenAssets[0], 135, 117);  //stove
   image(kitchenAssets[1], 55, 45);  //fire
   
   //text bounding box
   fill(roomColors[1]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[2]Garage', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
  //bounding position two
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + bndSpcr);

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 
}

//draws images from diningRoomAssets array
drawStudio = function() {
 background(roomColors[2]);

  
   //images in array
   image(diningRoomAssets[0], 102, 288);  //left chair
   image(diningRoomAssets[1], 412, 290);  //right chair
   image(diningRoomAssets[3], 161, 312);  //tulip table
   
   //text bounding box
   fill(roomColors[2]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[3]Studio', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[5]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[5], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 
}

//draws images at index 6,7 from the array
drawBedroom = function() {
 background(roomColors[3]);


   //images in array
   image(bedroomAssets[0], 25, 244);  //bed
   image(bedroomAssets[1], 105, 0);  //light
  
  
   //text bounding box
   fill(roomColors[3]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[4]Bedroom', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + bndSpcr); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);
}

//draws images at index 8,9, 10 from the array
drawBathroom = function() {
   background(roomColors[4]);

   //images in array
   image(bathroomAssets[0], 99, 218);  //vanity
   image(bathroomAssets[1], 146, 10);  //mirror
  
  
   //text bounding box
   fill(roomColors[4]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[5]bathroom', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace);

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);  
}

//draws images from the office array
drawGarden = function() {
   background(roomColors[5]);


   //images in array
   image(officeAssets[0], 100, 400);  //desk
   image(officeAssets[1], 186, 367);  //chair
   image(officeAssets[2], 348, 0);  //light
  
  
   //text bounding box
   fill(roomColors[5]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //room title
   fill(titleFill);
   text('[6]Garden', textXPos, textYPos);

  //nav keys
   //bounding position one
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace);  

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was types
  //print(key);
  print(keyCode);

   // living room [1]
  if( drawFunction === drawLivingRoom ) {
    if( key === '2' ) {
      drawFunction = drawGarage;
    }
    if( key === '3' ) {
      drawFunction = drawStudio;
    }
  } 

  // Garage [2] 
  else if( drawFunction === drawGarage ) {
    if( key === '3' ) {
      drawFunction = drawStudio;
    }
    else if( key === '1' ) {
      drawFunction = drawLivingRoom;
    }
  }

    // Studio [3]
  else if( drawFunction === drawStudio ) {
      if( key === '2' ) {
      drawFunction = drawGarage;
    }
      if( key === '4' ) {
      drawFunction = drawBedroom;
    }
      if( key === '6' ) {
      drawFunction = drawGarden;
    }
      else if( key === 'l' ) {
      drawFunction = drawLivingRoom;
    }
  }

      // Bedroom [4]
  else if( drawFunction === drawBedroom ) {
    if( key === '5' ) {
      drawFunction = drawBathroom;
    }
      else if( key === '3' ) {
      drawFunction = drawStudio;
    }
  }

    // Bathroom [5]
  else if( drawFunction === drawBathroom ) {
    if( key === '4') {
      drawFunction = drawBedroom;
    }
  }

  // Garden [6]
  else if( drawFunction === drawGarden ) {
    if( key === '3' ) {
      drawFunction = drawStudio;
    }
  }
}