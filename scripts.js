// Define block types
const blockTypes = [
  { name: "Move", color: "#ff0000" },
  { name: "Turn", color: "#00ff00" },
  { name: "Repeat", color: "#0000ff" }
];

// Create blocks
blockTypes.forEach(blockType => {
  const block = document.createElement("div");
  block.className = "block";
  block.textContent = blockType.name;
  block.style.backgroundColor = blockType.color;
  block.draggable = true;
  block.addEventListener("dragstart", dragStart);
  document.getElementById("workspace").appendChild(block);
});

// Drag and drop functions
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent);
}

// Prevent default behavior for dragover event
document.getElementById("workspace").addEventListener("dragover", function(event) {
  event.preventDefault();
});
