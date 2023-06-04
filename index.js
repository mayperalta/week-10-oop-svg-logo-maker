// include packages needed for this application
const inquirer = require('inquirer');
const fs = require ("fs");

// include 
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');

// Create an array of questions for user input 
const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter desired text color: ',
        name: 'textcolor',
    },
    {
        type: 'input',
        message: 'Enter desired shape: ',
        name: 'shape',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        message: 'Enter desired shape color: ',
        name: 'shapecolor',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (response) {
      console.log(response); 
      // function to write responses on CLI
    })
}

// Function call to initialize app
init();