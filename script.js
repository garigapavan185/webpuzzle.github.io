const startButton = document.getElementById("startButton");
const instructions = document.getElementById("instructions");

startButton.addEventListener("click", function() {
  // Redirect to the first clue page
  window.location.href = "clue1.html";
});


instructions.addEventListener("mouseover", function() {
  const tooltip = document.createElement("span");
  tooltip.textContent = "Click the button to start the puzzle";
  tooltip.style.position = "absolute";
  tooltip.style.top = "50%";
  tooltip.style.left = "50%";
  tooltip.style.transform = "translate(-50%, -50%)";
  tooltip.style.backgroundColor = "#4CAF50";
  tooltip.style.color = "white";
  tooltip.style.padding = "1rem 2rem";
  tooltip.style.borderRadius = "5px";
  tooltip.style.zIndex = "1";
  instructions.appendChild(tooltip);
});

instructions.addEventListener("mouseout", function() {
  instructions.removeChild(instructions.lastChild);
});
