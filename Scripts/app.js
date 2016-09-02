/// <reference path="objects/Label.ts"/>
/// <reference path="objects/Button.ts"/>
/**
 * FileName: app.js
 *
 * @author Kevin Ma
 * @date August 30, 2016
 *
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";
    var canvas;
    core.CANVAS_WIDTH = window.innerWidth;
    core.CANVAS_HEIGHT = window.innerHeight;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var clickMeButton;
    // app entry function
    function init() {
        canvas = document.getElementById('canvas');
        canvas.setAttribute("width", core.CANVAS_WIDTH.toString());
        canvas.setAttribute("height", core.CANVAS_HEIGHT.toString());
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over events  
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame 
        // after everything is set up - call main
        main();
    }
    function resize() {
        core.CANVAS_WIDTH = window.innerWidth;
        core.CANVAS_HEIGHT = window.innerHeight;
        helloLabel.x = core.CANVAS_WIDTH * 0.5;
        helloLabel.y = core.CANVAS_HEIGHT * 0.5;
    }
    /**
     * Utility Method to et the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */
    function gameLoop() {
        // helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, core.CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, core.CANVAS_HEIGHT);
        // change direction and speed for x and y
        if (helloLabel.y == core.CANVAS_HEIGHT || helloLabel.y == 0) {
            dy = Math.floor((Math.random() * 5) + 1);
            yDirection *= -1;
        }
        if (helloLabel.x == core.CANVAS_WIDTH || helloLabel.x == 0) {
            dx = Math.floor((Math.random() * 5) + 1);
            xDirection *= -1;
        }
        helloLabel.y += (dy * yDirection);
        helloLabel.x += (dx * xDirection);
        stage.update(); // refresh the stage container
    }
    function clickMeButton_clicked() {
        helloLabel.text = (helloLabel.text === 'Hello World!') ? 'Good Bye!' : 'Hello World!';
    }
    // everything happens here
    function main() {
        // Label object
        helloLabel = new objects.Label('Kevin Ma', '40px arial', '#000', core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
        // button object
        clickMeButton = new objects.Button("../Assets/images/clickMeButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);
        clickMeButton.on('click', clickMeButton_clicked);
    }
    // call init functin when window finishes loading
    window.addEventListener("load", init);
    window.addEventListener("resize", resize);
})(core || (core = {}));
;
//# sourceMappingURL=app.js.map