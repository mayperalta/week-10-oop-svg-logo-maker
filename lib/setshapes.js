// checks if shape matches user response then render shape
const {Circle, Square, Triange, Triangle} = require ("./shapes");

function setShape (response) {

    if (response.shape === 'Circle') {
        let inputShape = new Circle(response.text, response.textColor, response.ShapeColor);
        return inputShape.render();
    } else if (response.shape === 'Square') {
        let inputShape = new Square(response.text, response.textColor, response.ShapeColor);
        return inputShape.render();
    } else if (response.shape === 'Triangle') {
        let inputShape = new Triangle (response.text, response.textColor, response.ShapeColor);
        return inputShape.render();
    } else {
        return; 
    }
};

module.exports = setShape; 