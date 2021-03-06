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
module core {
    "use strict";

    let canvas: HTMLElement;
    export let CANVAS_WIDTH: number = window.innerWidth;
    export let CANVAS_HEIGHT: number = window.innerHeight;
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let yDirection: number = 1;
    let xDirection: number = 1;
    let dy: number = 1;
    let dx: number = 1;
    let clickMeButton: objects.Button;

    // app entry function
    function init(): void {

        canvas = document.getElementById('canvas');
        canvas.setAttribute("width", CANVAS_WIDTH.toString());
        canvas.setAttribute("height", CANVAS_HEIGHT.toString());

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over events  
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame 

        // after everything is set up - call main
        main();
    }

    function resize(): void {
        CANVAS_WIDTH = window.innerWidth;
        CANVAS_HEIGHT = window.innerHeight;
        helloLabel.x = CANVAS_WIDTH * 0.5;
        helloLabel.y = CANVAS_HEIGHT * 0.5;
    }

    /**
     * Utility Method to et the bounds of an object 
     * 
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis: number, boundary: number): number {
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
    function gameLoop(): void {
        // helloLabel.rotation += 5;

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

    function clickMeButton_clicked(): void {
        helloLabel.text = (helloLabel.text === 'Hello World!') ? 'Good Bye!' : 'Hello World!';
    }

    // everything happens here
    function main(): void {

        // Label object
        helloLabel = new objects.Label('Kevin Ma', '40px arial', '#000', CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);

        // button object
        clickMeButton = new objects.Button("../Assets/images/clickMeButton.png",
            CANVAS_WIDTH * 0.5,
            CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);

        clickMeButton.on('click', clickMeButton_clicked);

    }

    // call init functin when window finishes loading
    window.addEventListener("load", init);

    window.addEventListener("resize", resize);

};