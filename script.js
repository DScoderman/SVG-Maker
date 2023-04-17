const inquirer =require("inquirer")
const fs =require ('fs')
const MaxLengthInputPrompt = require('inquirer-MaxLengthInputPrompt')

const {Circle, Square, Triangle} = require("./shape_Classes/generateShapes");
const { choices } = require("yargs");
const { kMaxLength } = require("buffer");

// prompt for the characters, text color, color keyword, shape (circle, triangle, square).
// Prompts for the shape color, logo.SVG file creator and a 300x200 pixel image

const questions = [
    
    {
        type: "maxlength-input",
        message: "choose 3 chracters to input.",
        name: "text_Input",
        MaxLength: "3"
    },
    {
        type: "input",
        name: "textColor",
        message: "enter color keyword (OR a hexadecimal number)"
    },
    {
        type: "list",
        name: "shapeChoice",
        message: "choose a shape!",
        choices: ["Square", "Circle", "Triangle",]
    }
    {
        type: "input",
        name: "shapeColor",
        message: "choose a color for the shape"
    },
];

function init() {
inquirer
.prompt(questions)
.then((data) => {
    const SHAPEMAKER = generateShapes(data)
    fs.writeFile('./shape_Classes/generateShapes.js', SHAPEMAKER, (err) =>
      err ? console.log(err) : console.log('SVG Generating')
    );
});
}


// function to initalize app
init();