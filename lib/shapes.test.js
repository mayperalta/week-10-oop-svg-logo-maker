// test if logo generated returns the user selected shape, color, text color, and shape color

const {Circle, Square, Triange, Triangle} = require ("./shapes");

describe ('Circle', () => {
    it ('returns svg with user selected text, text color, shape color', () => {
        const circle = new Circle('abc', 'green', 'red'); 
        expect (circle.render()).toEqual(`
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="red" />
            <text x="150" y="115" font-size="50" text-anchor="middle" fill="green">abc</text>
             </svg>
            `
        );
        }); 
    
});



