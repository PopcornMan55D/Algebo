document.addEventListener("DOMContentLoaded", function() {
  const workspace = document.getElementById("workspace");
  const stage = document.getElementById("stage");

  // Create blocks
  const blockTypes = [
    { name: "Move", color: "#ff0000" },
    { name: "Turn", color: "#00ff00" },
    { name: "Repeat", color: "#0000ff" }
  ];
  blockTypes.forEach(blockType => {
    const block = createBlock(blockType);
    workspace.appendChild(block);
  });

  // Function to create a block
  function createBlock(blockType) {
    const block = document.createElement("div");
    block.className = "block";
    block.textContent = blockType.name;
    block.style.backgroundColor = blockType.color;
    block.draggable = true;
    block.addEventListener("dragstart", dragStart);
    return block;
  }

  // Function for drag and drop
  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.textContent);
  }

  // Prevent default behavior for dragover event
  workspace.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  // Handle drop event
  workspace.addEventListener("drop", function(event) {
    event.preventDefault();
    const blockName = event.dataTransfer.getData("text/plain");
    const block = document.createElement("div");
    block.className = "block";
    block.textContent = blockName;
    block.style.backgroundColor = "transparent";
    block.style.position = "absolute";
    block.style.left = (event.clientX - workspace.offsetLeft) + "px";
    block.style.top = (event.clientY - workspace.offsetTop) + "px";
    stage.appendChild(block);
  });
});
