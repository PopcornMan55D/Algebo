// Function to execute the generated Blockly code
function runCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
}

// Function to move the sprite
function moveSprite(x, y) {
    var sprite = document.getElementById('sprite');
    sprite.setAttribute('x', parseInt(sprite.getAttribute('x')) + x);
    sprite.setAttribute('y', parseInt(sprite.getAttribute('y')) + y);
}

// Blockly blocks
Blockly.Blocks['move'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([["right", "RIGHT"], ["left", "LEFT"], ["up", "UP"], ["down", "DOWN"]]), "direction");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['move'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var code = '';
    switch (dropdown_direction) {
        case 'RIGHT':
            code = 'moveSprite(10, 0);\n';
            break;
        case 'LEFT':
            code = 'moveSprite(-10, 0);\n';
            break;
        case 'UP':
            code = 'moveSprite(0, -10);\n';
            break;
        case 'DOWN':
            code = 'moveSprite(0, 10);\n';
            break;
    }
    return code;
};

// Initialize Blockly workspace after window loads
window.onload = function() {
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        trashcan: true
    });
};
