// Create an array of questions for user input 
const questions = [
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
    },
    {
        type: 'input',
        message: 'TEXT COLOR - Enter a color keyword (OR a hexadecimal number): ',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'SHAPE - Select a shape: ',
        name: 'shape',
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        message: 'SHAPE COLOR - Enter a color keyword (OR a hexadecimal number): ',
        name: 'shapeColor',
    }
];

module.exports = questions; 