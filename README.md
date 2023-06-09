# week-10-oop-svg-logo-maker

The task is to build a Node.js command line application that takes in user input to generate a logo and save it as an SGG file. The application prompts the user to select a  text, text color, shape color the saves the logo to the examples folder. 

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for text
THEN I can enter up to three characters

* This is done by creating an object property name called `text` with the type `input` as shown below. Then on index.js, a prompt() function `.prompt(questions)` is called to display the `message` `TEXT - Enter up to (3) characters:` on the command line where the user can type in a response. Validation is added to ensure the user can only enter up to 3 characters. 

    {
        type: 'input',
        message: 'TEXT - Enter up to (3) characters: ',
        name: 'text',
        // validates text length 
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Allowed text is up to 3.")
            }
            return true;
        }
    }

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

* This is done by creating an object property name called `textColor` with the type `input` as shown below. Then on index.js, a prompt() function `.prompt(questions)` is called to display the `message` `TEXT - Enter up to (3) characters:` on the command line where the user can type in a response. Both color keyword (ex. green) or hexadecimal equivalent (ex. #FFFFFF) are accepted. 

    {
        type: 'input',
        message: 'TEXT COLOR - Enter a color keyword (OR a hexadecimal number): ',
        name: 'textColor',
    }

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

* This is done by creating an object property name called `shape` with the type `list` as shown below. Then on index.js, a prompt() function `.prompt(questions)` is called to display the `message` `SHAPE - Select a shape:` on the command line where the user can select a shape--Circle, Square, Triangle. 

    {
        type: 'list',
        message: 'SHAPE - Select a shape: ',
        name: 'shape',
        choices: ["Circle", "Square", "Triangle"]
    }


WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

* This is done by creating an object property name called `shapeColor` with the type `input` as shown below. Then on index.js, a prompt() function `.prompt(questions)` is called to display the `message` `SHAPE COLOR - Enter a color keyword (OR a hexadecimal number):` on the command line where the user can type in a response. Both color keyword (ex. green) or hexadecimal equivalent (ex. #FFFFFF) are accepted. 

    {
        type: 'input',
        message: 'SHAPE COLOR - Enter a color keyword (OR a hexadecimal number): ',
        name: 'shapeColor',
    }

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`

* This is done when the `createLogo(response)` function is called on index.js. The function takes the newly selected shape and renders its properties, then create the SVG file `{selected shape}.svg` in the `/examples` folder. If the file exists, it will overwrite its contents. 

function createLogo (response) {
  const svg = setShape(response);
  const fileName = './examples/' + response.shape.toLowerCase() + '.svg'; 

  fs.writeFile(fileName, svg, error => error ? console.log(error):console.log("Success!"));
}

AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser

* This is done when the selected logo renders on the browser. 


THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

# Technologies used

* JS
* Node.js
* Inquirer version 8.2.4 package
* Jest

# How to Use 

* git clone https://github.com/mayperalta/week-10-oop-svg-logo-maker.git
* npm init
* npm i jest
* npm i inquirer@8.2.4
* node index.js 
* enter responses
* view SVG file on browser
* npm run test


## Mock-Up

The following image shows a mock-up of the generated SVG given the following inputs:

Circle - `ABC` for the text, `#FFFFFF` for the text color, `circle` from the list of shapes, and `green` for the shape color. 

![Circle SVG](./assets/circle.png)

Square - `ABC` for the text, `#FFFFFF` for the text color, `circle` from the list of shapes, and `red` for the shape color. 

![Square SVG](./assets/square.png)

Triangle - `ABC` for the text, `#FFFFFF` for the text color, `circle` from the list of shapes, and `blue` for the shape color. 

![Triangle SVG](./assets/triangle.png)

The below image shows the results from an `npm run test`.

![Npm run test results](./assets/test-results.png)

The video below demonstrates how the application works. It also includes an `npm run test`, showing whether the script successfully renders the expected output.  

![Watch video](./assets/svg-demo.gif)

![Watch video](https://drive.google.com/file/d/1JYjQUUPK7XoxFQX-5O9YlQWpMRzbJkvb/view)

# Repository

The URL of the GitHub repository, with a unique name and a README describing the project:

![GITHub Repo](https://github.com/mayperalta/week-10-oop-svg-logo-maker)






