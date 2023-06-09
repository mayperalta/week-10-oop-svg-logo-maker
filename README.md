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

* This is done by creating a key name called `text` with a type `input` as shown below then on index.js the prompt() function `.prompt(questions)` is called to display the message `TEXT - Enter up to (3) characters:` on the command line where user can type in a response. A validation is added to ensure user can only enter a max of 3 characters. 

```
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
```

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

* This is done by creating a text input as shown below then use the prompt() function `.prompt(questions)` to display the message `TEXT COLOR - Enter a color keyword (OR a hexadecimal number):` on the command line where user can type in a response. 

```
    {
        type: 'input',
        message: 'TEXT COLOR - Enter a color keyword (OR a hexadecimal number): ',
        name: 'textColor',
    }
```


WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png)
