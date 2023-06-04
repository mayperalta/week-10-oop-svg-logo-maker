// include packages needed for this application
const inquirer = require('inquirer');
const fs = require ("fs");

// import classes 
const Triangle = require('./lib/shapes');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes');

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let svgDetails = '';
    svgDetails = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" >';
    // tag places <text> on top of shape
    svgDetails += '<g>';

    fs.writeFile(fileName, data, error => error ? console.log(error):console.log("Success!"));
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (response) {
      console.log(response); 
      writeTofile("logo.svg",  'ADD FUNCTION  HERE')
      
    })
}

init();