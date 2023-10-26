
// document.addEventListener("DOMContentLoaded", function(event) {
//Use window.onload to ensure js runs after all html/css is loaded up
window.onload = function() {
  //Selects the submit button element
  const memeFormSub = document.querySelector("form");
  //Using closure to keep track of calls to add a unique class just in case
  let count = 1;
  //Adds event listner on the submit button, listening for a click
  memeFormSub.addEventListener("submit", function(event) {
    //Prevents automatic submissions and reload of page
    console.log('test')
    event.preventDefault();
    //Looks to see if any value has been assigned to the URL input, if not displays message to put choose an image URL
    // if(document.querySelector("#memeUrl").value === "") window.alert("Please Choose An Image URL!")
    // //If something is assigned, will do the following
    // else {
      //Create new elements to build the meme
      const memeContain = document.createElement("div");
      const memeDiv = document.createElement("div");
      const image = document.createElement("img");
      const memeTopText = document.createElement("p");
      const memeBotText = document.createElement("p");
      const overlay = document.createElement("div");
      const btnRMV = document.createElement("button");
      //Assign the form values to the relevant element properties
      image.src = `${document.querySelector("#memeUrl").value}`;
      memeTopText.innerText = document.querySelector("#textTop").value
      memeBotText.innerText = document.querySelector("#textBottom").value
      //Append the elements accordingly
      overlay.append(btnRMV);
      memeDiv.append(image,memeTopText,memeBotText,overlay);
      memeContain.append(memeDiv);
      document.querySelector("footer").append(memeContain);
      //Assign the class values to apply the rest of the styling, including the unique class for each memeDiv
      memeContain.classList.add("memeContain", `meme${count}`);
      memeDiv.classList.add("memeDiv");
      image.classList.add("img");
      memeTopText.classList.add("memeTextTop");
      memeBotText.classList.add("memeTextBot");
      overlay.classList.add("overlay");
      btnRMV.innerText = "Delete...Forever?";
      //Set all form field values to nothing
      document.querySelector("#memeUrl").value = "";
      document.querySelector("#textBottom").value = "";
      document.querySelector("#textTop").value = "";
      //Increment count to track further progression
      count++;
    // }
  });
  //Add event listener to delete the memes once the button is clicked
  //Will delegate this listener to the overall parent, which is the footer
  const memeSpace = document.querySelector(".memeSpace");
  memeSpace.addEventListener("click", function(event) {
    //Need to isolate the click only to the delete button
    if(event.target.tagName === "BUTTON") {
      const meme = event.target.parentElement.parentElement.parentElement;
      console.log(meme)
      meme.remove();
    }
  });
};
// });