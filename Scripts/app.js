/// <reference path="objects/Label.ts"/>
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
(function () {
    "use strict";
    var canvas;
    var CANVAS_WIDTH = window.innerWidth;
    var CANVAS_HEIGHT = window.innerHeight;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    // app entry function
    function init() {
        canvas = document.getElementById('canvas');
        canvas.setAttribute("width", CANVAS_WIDTH.toString());
        canvas.setAttribute("height", CANVAS_HEIGHT.toString());
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame 
        main();
    }
    // function resize(): void {
    //     let CANVAS_WIDTH: number = window.innerWidth;
    //     let CANVAS_HEIGHT: number = window.innerHeight;
    //     helloLabel.x = CANVAS_WIDTH * 0.5;
    //     helloLabel.y = CANVAS_HEIGHT * 0.5;
    // }
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    function gameLoop() {
        helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, CANVAS_HEIGHT);
        // change direction and speed for x and y
        if (helloLabel.y == CANVAS_HEIGHT || helloLabel.y == 0) {
            dy = Math.floor((Math.random() * 5) + 1);
            yDirection *= -1;
        }
        if (helloLabel.x == CANVAS_WIDTH || helloLabel.x == 0) {
            dx = Math.floor((Math.random() * 5) + 1);
            xDirection *= -1;
        }
        helloLabel.y += (dy * yDirection);
        helloLabel.x += (dx * xDirection);
        stage.update(); // refresh the stage container
    }
    function main() {
        helloLabel = new objects.Label('Kevin Ma', '40px arial', '#000', CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
    }
    // call init functin when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map