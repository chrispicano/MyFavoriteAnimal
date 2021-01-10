var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  // TODO: Complete function
if(element.matches(".box")) {
  var state = element.getAttribute("data-state");
  console.log(state)

  if( state === "hidden") {
    console.log("Inside if statement")

    element.textContent = element.dataset.number;
    
    element.dataset.state = "visible"


  }
  else {
    console.log("Inside else statement")

    element.textContent ="";

    element.setAttribute("data-state", "hidden")



  }
    
  






  


}











});
