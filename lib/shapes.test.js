// test if logo generated returns the user selected shape, color, text color, and shape color
const setShape = require ("./setshapes");
const {Circle, Square, Triange, Triangle} = require ("./shapes");

describe('Circle', () => {
    it ('returns svg with user selected text, text color, shape color', () => {
        const circle = new Circle('abc', 'green', 'red'); 
        expect (circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="red" />
            <text x="150" y="115" font-size="50" text-anchor="middle" fill="green">ABC</text>
        </svg>`
        );
        }); 
});

describe('Square', () => {
    it ('returns svg with user selected text, text color, shape color', () => {
        const square = new Square('abc', 'green', 'red'); 
        expect (square.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="50%" height="70%" fill="red" />
            <text x="75" y="85" font-size="50" text-anchor="middle" fill="green">ABC</text>
        </svg>`
        );
        }); 
});

describe('Triangle', () => {
    it ('returns svg with user selected text, text color, shape color', () => {
        const triangle = new Triangle('abc', 'green', 'red'); 
        expect (triangle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="red" />
            <text x="145" y="150" font-size="50" text-anchor="middle" fill="green">ABC</text>
        </svg>`
        );
        }); 
});

