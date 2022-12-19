const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const startButton = document.getElementById('start');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let currentlyPlaying = true;

let numClosedDoors = 3;


function isBot(door) {
  if(door.src === botDoorPath) {
    return true
  }
  else {
    return false
  }
};

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  }
  else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  }
  else if(isBot(door)) {
    gameOver();
  }
};

let openDoor1;
let openDoor2;
let openDoor3; 

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 =  beachDoorPath;
    openDoor3 = spaceDoorPath
  }
  else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
};


doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);}
};
doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {doorImage2.src = openDoor2;
  playDoor(doorImage2);}
};
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying) {doorImage3.src = openDoor3;
  playDoor(doorImage3);}
};

startButton.onclick = () => startRound();

const startRound = () => {
  if (!currentlyPlaying) {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();}
};

const gameOver = (status) => {
if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?'
}
else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentlyPlaying = false;
};


startRound();
