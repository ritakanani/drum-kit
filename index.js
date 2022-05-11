
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  
  // Anonymous function as second input in addEventListner and first input in type - click
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
    
    // what to do when click detected.
  });
}

