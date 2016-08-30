/// <reference path="objects/Label.ts"/>
/**
 * FileName: app.js
 *
 * @author Kevin Ma
 * @date August 29, 2016
 *
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var helloLabel;
    // app entry function
    function init() {
        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame 
        main();
    }
    function gameLoop() {
        stage.update(); // refresh the stage container
        helloLabel.rotation -= 5;
    }
    function main() {
        helloLabel = new objects.Label('Kevin Ma', '40px arial', '#000', 160, 160, true);
        stage.addChild(helloLabel);
    }
    // call init functin when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map