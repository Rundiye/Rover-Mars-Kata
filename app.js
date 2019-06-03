//Project name: Mars Rover Kata
//Student: Rundi-ye Yap Xia
//Contact: rundiye93@gmail.com
//Web dev. June 2019, Barcelona

//Used website (jshint.com) to check and review code.


// Rover Object Goes Here
// Initial direction : "N"

var rover = {
  direction: "N",
  position: [0,0], // x=0, y=0
  travelLog: []
};


// Create a matrix with randomly positioned obstacles 
// Number of obstacles = 6 
// Grid = 10x10
// Initial position = [0,0]

var planetMars = [
 [rover, null, null, null, "Crater", null, null, null, null, null],
 [null, null, null, "Black Hole", null, null, null, null, null, null],
 [null, "Crater", null, null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null, null, null, null],
 ["Alien", null, null, null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null, "Zombie", null, null],
 [null, null, null, null, null, null, null, null, null, null],
 [null, null, null, null, null, "Crater", null, null, null, null]
];

console.log(planetMars); 


// Turning the Rover ======================

function turnLeft(rover, planetMars){
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break; 
    
  }
}

function turnRight(rover, planetMars){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break; 
    
  }
}

//Moving forward, with limits set to keep Rover inside the grid.
// rover.position [0] = y
// rover.position [1] = x

function moveForward(rover, planetMars) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      if(rover.position[0] < 1){
        console.log("Danger! You have reached the border, you cannot move forward");
      } else {
        rover.position[0] = rover.position[0] - 1;
      }
      break;
    
    case "E":
      if (rover.position[1] > 8) {
        console.log("Danger! You have reached the border, you cannot move forward");
      } else {
        rover.position[1] = rover.position[1] + 1;
      }
      break;
    
    case "S":
      if (rover.position[0] > 8) {
        console.log("Danger! You have reached the border, you cannot move forward");
      } else {
        rover.position[0] = rover.position[0] + 1;
      }
      break;
    
    case "W":
      if (rover.position[1] < 1) {
        console.log("Danger! You have reached the border, you cannot move forward");
      } else {
        rover.position[1] = rover.position[1] - 1;
      }
      break;
  }

  console.log("moveForward was called");
  console.log("Rovers position is: " + [rover.position]);
}

/*Moving backwards function, same as the moveforward function 
but the other way around*/

function moveBackwards(rover, planetMars) {
  console.log("moveBackwards was called");

  switch (rover.direction) {
    case "N":
      if (rover.position[1] > 8) {
        console.log("Danger! You have reached the border, you cannot move it any further");
      } else {
        rover.position[0] = rover.position[0] + 1;
      }
      break;
    
    case "E":
      if (rover.position[1] < 1) {
        console.log("Danger! You have reached the border, you cannot move it any further");
      } else {
        rover.position[1] = rover.position[1] - 1;
      }
      break;
    
    case "S":
      if (rover.position[0] < 1) {
        console.log("Danger! You have reached the border, you cannot move it any further");
      } else {
        rover.position[0] = rover.position[0] - 1;
      }
      break;
    
    case "W":
      if (rover.position[1] > 8) {
        console.log("Danger! You have reached the border, you cannot move it any further");
      } else {
        rover.position[1] = rover.position[1] + 1;
      }
      break;
  }

  console.log("moveBackwards was called");
  console.log("Rovers position is: " + [rover.position[1], rover.position[0]]);
}


// Create a function that receives a list of commands
// Valid commands: (b)ackwards, f(orward), (r)ight, (l)eft
// Prompt interaction found on (https://javascript.info/alert-prompt-confirm)

function receiveCommand(rover){

  var journey = prompt("Insert the commands to move the Rover: b (backwards), f (forward), r (right), l (left)");

  if(journey.indexOf("b") >= 0 || journey.indexOf("f") >= 0 || journey.indexOf("r") >= 0 || journey.indexOf("l") >= 0 ){
  
    var newJourney = journey.split("");

  console.log("Rover's journey: " + journey);


  for(var i = 0; i < newJourney.length; i++){

    switch(journey[i]){

      case "l":
         turnLeft(rover); 
        break;
      case "r":
         turnRight(rover); 
        break;
      case "f":
         moveForward(rover); 
        break;
      case "b":
        moveBackwards(rover);
        break;
  }
  var position = [rover.position[1], rover.position[0]];

  rover.travelLog.push(position);

  console.log("Rover's current location: " + position);
}
  
  }else {
    alert("Your command is not valid! Enter a valid command (b,f,r,l)!"); 
    //alert interaction found on (https://javascript.info/alert-prompt-confirm)
    receiveCommand(rover);
}
}

  // Tracking the moves

  receiveCommand(rover);
  console.log (rover.travelLog);



//Testing, Validate Inputs

console.log("Your current position is: " + rover.position);
console.log("Your current direction is: " + rover.direction);


console.log(rover.travelLog); // to print out all of the spaces the rover has traveled over

// when entering an invalid command, example: zzy, alert pops out
// When rover goes off the grid, it returns to the initial position [0,0], direction: "N"


