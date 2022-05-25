/*
COLOR CALCULATOR

In this project we'll create a program that can combine and deconstruct colors according to the following tables

Color combining
inputs	                output
red + blue	            purple
red + yellow	        orange
blue + yellow	        green
anything else	        "error"

Color deconstructing
input	                outputs
purple	                red + blue
orange	                red + yellow
green	                blue + yellow
anything else	        error

We won't worry about any colors that are neither primary nor secondary colors.


YOUR PROGRAM

Fork and clone. Write your code in a file named main.js.

Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.
*/


const prompt = require("prompt-sync")({sigint: true});

let con_or_decon = prompt("Do you want to construct (type: con) or deconstruct (type: decon) colors? ").toLowerCase();

let c = 'con'
let d = 'decon'
let r = 'red';
let b = 'blue';
let y = 'yellow';
let p = 'purple';
let o = 'orange';
let g = 'green';

if (con_or_decon === 'con' || con_or_decon === 'decon'){
    if (con_or_decon === 'con'){
        let con_color1 = prompt("What's your first color? Red, Blue or Yellow? ").toLowerCase();
        let con_color2 = prompt("What's your second color (different from first color)? Red, Blue or Yellow? ").toLowerCase();
        if ((con_color1 === r && con_color2 === b) || (con_color1 === b && con_color2 === r)){
            console.log("The construct of " + r + " and " + b + " is " + p + ".");
        }else if ((con_color1 === r && con_color2 === y) || (con_color1 === y && con_color2 === r)){
            console.log("The construct of " + r + " and " + y + " is " + o + ".");
        }else if ((con_color1 === y && con_color2 === b) || (con_color1 === b && con_color2 === y)){
            console.log("The construct of " + y + " and " + b + " is " + g + ".");
        }else if ((con_color1 === y && con_color2 === y) || (con_color1 === r && con_color2 === r) || (con_color1 === b && con_color2 === b)){
            console.log("You picked the same 2 colors. What did you expect?");
        }else{
            console.log("Don't know how but you blew it again!")
        }
    }

    if (con_or_decon === 'decon'){
        let decon_color = prompt("What color would you like to deconstruct? Purple, Orange or Green? ").toLowerCase();
        if (decon_color === p){
            console.log("The 2 colors that make " + p + " are " + r + " and " + b + ".");
        }else if (decon_color === o){
            console.log("The 2 colors that make " + o + " are " + r + " and " + y + ".");
        }else if (decon_color === g){
            console.log("The 2 colors that make " + g + " are " + b + " and " + y + ".");
        }else{
            console.log("Fail! Pick either Purple, Orange or Green.")
        }
    }
}else{
    console.log("Couldn't even get started, huh? Let's follow the prompts next time. Might work a bit better.")
}

