document.addEventListener("DOMContentLoaded", function() {
  const workspace = document.getElementById("workspace");
  const stage = document.getElementById("stage");
  const sidebar = document.getElementById("sidebar");

  // Create blocks
  const blockTypes = [
    { name: "Move", color: "#ff0000" },
    { name: "Turn", color: "#00ff00" },
    { name: "Repeat", color: "#0000ff" }
  ];
  blockTypes.forEach(blockType => {
    const block = createBlock(blockType);
    sidebar.appendChild(block);
  });

  // Function to create a block
  function createBlock(blockType) {
    const block = document.createElement("div");
    block.className = "block-type";
    block.textContent = blockType.name;
    block.style.backgroundColor = blockType.color;
    block.setAttribute("data-type", blockType.name.toLowerCase());
    block.addEventListener("click", blockClick);
    return block;
  }

  // Function for block click event
  function blockClick(event) {
    const blockType = event.target.getAttribute("data-type");
    const block = createBlockElement(blockType);
    workspace.appendChild(block);
  }

  // Function to create a block element
  function createBlockElement(blockType) {
    const block = document.createElement("div");
    block.className = "block";
    block.textContent = blockType;
    block.style.backgroundColor = "transparent";
    block.style.position = "absolute";
    block.style.left = "10px";
    block.style.top = "10px";
    return block;
  }
});

