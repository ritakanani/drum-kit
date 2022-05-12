let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  // Anonymous function as second input in addEventListner and first input is type - click
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // what to do when click detected.
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;      

      default: console.log(buttonInnerHTML);
        break;
    }
  });
}

// constructor function example
function HouseKepper(name, age, language) {
  this.name = name,
  this.age = age, 
  this.language = language
};

var houseKeeper1 = new HouseKepper("Rita", 30, "English");
console.log(houseKeeper1.name);  // Rita
