// include packages needed for this application
const inquirer = require('inquirer');
const fs = require ("fs");

// import classes 
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');

// Create an array of questions for user input 
const questions = [
    {
        type: 'input',
        message: 'Enter up to (3) characters: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a color keyword (OR a hexadecimal number): ',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Select a desired shape: ',
        name: 'shape',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        message: 'Enter a color keyword (OR a hexadecimal number): ',
        name: 'shapeColor',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (response) {
      console.log(response); 
      
    })
}

// Function call to initialize app
init();