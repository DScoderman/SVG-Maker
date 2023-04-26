const inquirer =require("inquirer")
const fs =require ('fs')


const shapeJS = require("./lib/shape.js");

const shapes = shapeJS.Shape
const Circle = shapeJS.Circle
const Square = shapeJS.Square
const Triangle = shapeJS.Triangle



// prompt for the characters, text color, color keyword, shape (circle, triangle, square).
// Prompts for the shape color, logo.SVG file creator and a 300x200 pixel image

// class SVG{
// constructor() {
//     this.textSVG = ''
//     this.shapeSVG = ''
// }
// render(){ `<svg width="250" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">`


// }
// }


const questions = [
    
    {
        type: "maxlength-input",
        message: "choose 3 chracters to input.",
        name: "textInput",
        validate: (text) => {
         return text.length <= 3 || "choose only 3 characters!"
        }
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
    },
    {
        type: "input",
        name: "shapeColor",
        message: "choose a color for the shape"
    },
];

// function below writes response to inputs
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        console.log(data);
        let userChoice;
        if (data.shapeChoice === "Square") {
          const square = new Square(data.textInput, data.textColor, data.shapeColor);
          userChoice = square.render();
        } else if (data.shapeChoice === "Circle") {
          const circle = new Circle(data.textInput, data.textColor, data.shapeColor);
          userChoice = circle.render();
        } else if (data.shapeChoice === "Triangle") {
          const triangle = new Triangle(data.textInput, data.textColor, data.shapeColor);
          userChoice = triangle.render();
        }
  
        fs.writeFile('./assets/logo.svg', userChoice, (err) =>
          err ? console.log(err) : console.log('SVG Generating')
        );
      });
  }


// function to initalize app
init();