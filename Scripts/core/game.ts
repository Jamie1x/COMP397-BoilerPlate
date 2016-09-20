var canvas: HTMLElement;
var stage: createjs.Stage;
var text: createjs.Text;

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}

function gameLoop(event : createjs.TickerEvent) : void {
    text = new createjs.Text("Hello World", "60px Consolar", "#000000");
    stage.addChild(this.text);
}

