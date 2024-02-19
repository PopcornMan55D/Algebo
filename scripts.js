document.addEventListener("DOMContentLoaded", function() {
  // Load Blockly toolbox
  fetch('toolbox.xml')
    .then(response => response.text())
    .then(toolboxXml => {
      // Create Blockly workspace
      var workspace = Blockly.inject('workspace', {
        toolbox: toolboxXml
      });
    });
});
