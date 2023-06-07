// set user response 

const {Circle, Square, Triange} = "./shapes.js";

function setShape (response) {

    if (response.shape === 'Circle') {
        let shape = new Circle(response.text, response.textColor, response.ShapeColor);
        return shape.render();
    }

    if (response.shape === 'Square') {
        let shape = new Square(response.text, response.textColor, response.ShapeColor);
        return shape.render();
    }

    if (response.shape === 'Triange') {
        let shape = new Triange(response.text, response.textColor, response.ShapeColor);
        return shape.render();
    }
};

module.exports = setShape; 