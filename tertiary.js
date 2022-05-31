/*
STRETCH GOAL w/ includes()

Remove the intial question about whether the user wants to combine or deconstruct. Instead, prompt the user a single time for colors. If the user inputs a single color (i.e.: "purple"), deconstruct it. If the user inputs two colors separated by a space, (i.e.: "red blue"), combine them.
*/

const prompt = require("prompt-sync")({sigint: true});

let c_or_d = prompt("Input 1 or 2 colors: red, blue, yellow, violet, orange, green, black, bluegreen, yellowgreen, yelloworange, redorange, blueviolet, redviolet. ").toLowerCase();

let r = 'Red';
let b = 'Blue';
let y = 'Yellow';
let v = 'Violet';
let o = 'Orange';
let g = 'Green';
let bl = 'Black';
let bg = 'Bluegreen';
let yg = 'Yellowgreen';
let yo = 'Yelloworange';
let ro = 'Redorange';
let bv = 'Blueviolet';
let rv = 'Redviolet';

if (c_or_d.includes('red') || c_or_d.includes('yellow') || c_or_d.includes('blue')  || c_or_d.includes('violet') || c_or_d.includes('orange') || c_or_d.includes('green') || c_or_d.includes('black') || c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet')){
    if (c_or_d.includes('red') && c_or_d.includes('blue')){
        console.log("The primary colors " + r + " and " + b + " make the secondary color " + v + ".");
    } else if (c_or_d.includes('red') &&  c_or_d.includes('yellow')){
        console.log("The primary colors " + r + " and " + y + " make the secondary color " + o + ".");
    } else if (c_or_d.includes('blue') && c_or_d.includes('yellow')){
        console.log("The primary colors " + y + " and " + b + " make the secondary color " + g + ".");
    } else if (c_or_d.includes('blue') && c_or_d.includes('yellow') && c_or_d.includes('red')){
        console.log("The primary colors " + b + ", " + r + " and " + y + " make the secondary color " + bl);
    } else if (c_or_d.includes('blue') && c_or_d.includes('green')){
        console.log("The primary color " + b + " and the secondary color " + g + " make the tertiary color " + bg + ".");
    } else if (c_or_d.includes('yellow') && c_or_d.includes('green')){
        console.log("The primary color " + y + " and the secondary color " + g + " make the tertiary color " + yg + ".");
    } else if (c_or_d.includes('yellow') && c_or_d.includes('orange')){
        console.log("The primary color " + y + " and the secondary color " + o + " make the tertiary color " + yo + ".");
    } else if (c_or_d.includes('red') && c_or_d.includes('orange')){
        console.log("The primary color " + r + " and the secondary color " + o + " make the tertiary color " + ro + ".");
    } else if (c_or_d.includes('blue') && c_or_d.includes('violet')){
        console.log("The primary color " + b + " and the secondary color " + v + " make the tertiary color " + bv + ".");
    } else if (c_or_d.includes('red') && c_or_d.includes('violet')){
        console.log("The primary color " + r + " and the secondary color " + v + " make the tertiary color " + rv + ".");
    } else if (c_or_d.includes('red') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet'))){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('blue') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet'))){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('yellow') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet'))){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('green') && c_or_d.includes('bluegreen') || c_or_d.includes('green') && c_or_d.includes('yellowgreen') || c_or_d.includes('green') && c_or_d.includes('yelloworange') || c_or_d.includes('green') && c_or_d.includes('redorange') || c_or_d.includes('green') && c_or_d.includes('blueviolet') || c_or_d.includes('green') && c_or_d.includes('redviolet')){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('orange') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet'))){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('violet') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet'))){
        console.log("This calculator doesn't mix primary or secondry colors with tertiary colors. Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('black') && (c_or_d.includes('bluegreen') || c_or_d.includes('yellowgreen') || c_or_d.includes('yelloworange') || c_or_d.includes('redorange') || c_or_d.includes('blueviolet') || c_or_d.includes('redviolet') || c_or_d.includes('red') || c_or_d.includes('yellow') || c_or_d.includes('blue')  || c_or_d.includes('violet') || c_or_d.includes('orange') || c_or_d.includes('green') || c_or_d.includes('black'))){
        console.log("For this calculator, anything with " + bl + " is still " + bl + ". Try the primary and secondary colors like " + r + ", " + b + ", " + y + ", " + v + ", " + o + " or " + g + ".");
    } else if (c_or_d.includes('red')){
        console.log(r + " stands alone. It's a primary color.")
    } else if (c_or_d.includes('blue')){
        console.log(b + " stands alone. It's a primary color.")
    } else if (c_or_d.includes('yellow')){
        console.log(y + " stands alone. It's a primary color.")
    } else if (c_or_d.includes('violet')){
        console.log("The secondary color " + v + " is made from primary colors " + r + " and " + b + ".");
    } else if (c_or_d.includes('orange')){
        console.log("The secondary color " + o + " is made from primary colors " + r + " and " + y + ".");
    } else if (c_or_d.includes('green')){
        console.log("The secondary color " + g + " is made from primary colors " + y + " and " + b + ".");
    } else if (c_or_d.includes('black')){
        console.log("The secondary color " + bl + " is made from all the primary colors: " + b + ", " + y + " and " + r + ".");
    } else if (c_or_d.includes('blue-green')){
        console.log("The tertiary color " + bg + " is made from primary color " + b + " and secondary color " + g + ".");
    } else if (c_or_d.includes('yellow-green')){
        console.log("The tertiary color " + yg + " is made from primary color " + y + " and secondary color " + g + ".")
    } else if (c_or_d.includes('yellow-orange')){
        console.log("The tertiary color " + yo + " is made from primary color " + y + " and secondary color " + o + ".")
    } else if (c_or_d.includes('red-orange')){
        console.log("The tertiary color " + ro + " is made from primary color " + r + " and secondary color " + o + ".")
    } else if (c_or_d.includes('blue-violet')){
        console.log("The tertiary color " + bv + " is made from primary color " + b + " and secondary color " + v + ".")
    } else if (c_or_d.includes('red-violet')){
        console.log("The tertiary color " + rv + " is made from primary color " + r + " and secondary color " + v + ".")
    } else{
        console.log("Something went wrong. Try again")
    }
}else{
    console.log("Couldn't even get started, huh? Let's follow the prompts next time. Might work a bit better.")
}

