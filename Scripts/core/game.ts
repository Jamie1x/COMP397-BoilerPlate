var canvas: HTMLElement;
var stage: createjs.Stage;

function init() {

    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}

function gameLoop(event : createjs.TickerEvent) : void {
    var text : createjs.Text = new createjs.Text("Test","60px Consolas", "#000000");

    stage.addChild(text);
}

