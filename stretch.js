/*
STRETCH GOAL w/o includes()

Remove the intial question about whether the user wants to combine or deconstruct. Instead, prompt the user a single time for colors. If the user inputs a single color (i.e.: "purple"), deconstruct it. If the user inputs two colors separated by a space, (i.e.: "red blue"), combine them.
*/

const prompt = require("prompt-sync")({sigint: true});

let c_or_d = prompt("Input 2 colors to make 1: red, blue and yellow. Or input 1 color to make 2: purple, orange or green. ").toLowerCase();

 
let rb = 'red blue';
let br = 'blue red';
let by = 'blue yellow';
let yb = 'yellow blue';
let yr = 'yellow red';
let ry = 'red yellow';
let rr = 'red red';
let yy = 'yellow yellow';
let bb = 'blue blue';
let p = 'purple';
let o = 'orange';
let g = 'green';
let r = 'red';
let b = 'blue';
let y = 'yellow';


if (c_or_d === rb || br || by || yb || yr || ry || p || o || g || rr || yy || bb){
    if (c_or_d === rb || c_or_d === br || c_or_d === by || c_or_d === yb || c_or_d === yr || c_or_d === ry || c_or_d === rr || c_or_d === yy || c_or_d === bb){
        if (c_or_d === rb || c_or_d === br){
            console.log("The construct of " + r + " and " + b + " is " + p + ".");
        }else if (c_or_d === yr || c_or_d === ry){
            console.log("The construct of " + r + " and " + y + " is " + o + ".");
        }else if (c_or_d === by || c_or_d === yb){
            console.log("The construct of " + y + " and " + b + " is " + g + ".");
        }else if (c_or_d === rr || c_or_d === yy || c_or_d === bb){
            console.log("You picked the same 2 colors. What did you expect?");
        }else{
            console.log("Don't know how but you blew it again!")
        }
    }

    if (c_or_d === p || c_or_d === o || c_or_d === g){
        if (c_or_d === p){
            console.log("The 2 colors that make " + p + " are " + r + " and " + b + ".");
        }else if (c_or_d === o){
            console.log("The 2 colors that make " + o + " are " + r + " and " + y + ".");
        }else if (c_or_d === g){
            console.log("The 2 colors that make " + g + " are " + b + " and " + y + ".");
        }else{
            console.log("Fail! Pick either Purple, Orange or Green.")
        }
    }

}else{
    console.log("Couldn't even get started, huh? Let's follow the prompts next time. Might work a bit better.")
}

