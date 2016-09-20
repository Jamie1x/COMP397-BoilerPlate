var canvas;
var stage;
function init() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}
function gameLoop(event) {
    var text = new createjs.Text("Test", "60px Consolas", "#000000");
    stage.addChild(text);
}
//# sourceMappingURL=game.js.map