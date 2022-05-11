
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  
  // Anonymous function as second input in addEventListner and first input in type - click
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  // what to do when click detected.
  });
}

