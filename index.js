// include packages needed for this application
const inquirer = require('inquirer');
const fs = require ("fs");
const setShape = require ('./lib/setshapes'); 
const questions = require ('./lib/questions');

// function to create svq file
function createLogo (response) {
  const svg = setShape(response);
  const fileName = './examples/' + response.shape.toLowerCase() + '.sgv'; 
  console.log("fileName: " + fileName)
  fs.writeFile(fileName, svg, error => error ? console.log(error):console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((response) => {
      // test user input
      console.log("shape: " + response.shape)
      console.log("text: " + response.text)
      console.log("textColor: " + response.textColor)
      console.log("shapeColor: " + response.shapeColor)
      
      createLogo(response); 
    })
  .catch (err => {
  console.log(err); 
  });
}

init();
