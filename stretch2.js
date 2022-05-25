/*
STRETCH GOAL w/ includes()

Remove the intial question about whether the user wants to combine or deconstruct. Instead, prompt the user a single time for colors. If the user inputs a single color (i.e.: "purple"), deconstruct it. If the user inputs two colors separated by a space, (i.e.: "red blue"), combine them.
*/

const prompt = require("prompt-sync")({sigint: true});

let c_or_d = prompt("Input 2 colors to make 1: red, blue and yellow. Or input 1 color to make 2: purple, orange or green. ").toLowerCase();

let r = 'red';
let b = 'blue';
let y = 'yellow';
let p = 'purple';
let o = 'orange';
let g = 'green';

if (c_or_d.includes('red') || c_or_d.includes('yellow') || c_or_d.includes('blue')  || c_or_d.includes('purple') || c_or_d.includes('orange') || c_or_d.includes('green')){
    if (c_or_d.includes('red') || c_or_d.includes('yellow') || c_or_d.includes('blue')){
        if (c_or_d.includes('red') && c_or_d.includes('blue')){
            console.log("The construct of " + r + " and " + b + " is " + p + ".");
        }else if (c_or_d.includes('red') &&  c_or_d.includes('yellow')){
            console.log("The construct of " + r + " and " + y + " is " + o + ".");
        }else if (c_or_d.includes('blue') || c_or_d.includes('yellow')){
            console.log("The construct of " + y + " and " + b + " is " + g + ".");
        }
    }else if (c_or_d.includes('purple') || c_or_d.includes('orange') || c_or_d.includes('green')){
        if (c_or_d.includes('purple')){
            console.log("The 2 colors that make " + p + " are " + r + " and " + b + ".");
        }else if (c_or_d.includes('orange')){
            console.log("The 2 colors that make " + o + " are " + r + " and " + y + ".");
        }else if (c_or_d.includes('green')){
            console.log("The 2 colors that make " + g + " are " + b + " and " + y + ".");
        }
    }else{
        console.log("Fail! Hard time following directions? It's ok. Give it another try.")
    }
}else{
    console.log("Couldn't even get started, huh? Let's follow the prompts next time. Might work a bit better.")
}

