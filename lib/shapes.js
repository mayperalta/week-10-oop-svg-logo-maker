// parent class 
class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor; 
        this.shapeColor = shapeColor; 
    }
};

// render circle 
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super (this.text, this.textColor, this.shapeColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

// render square
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super (this.text, this.textColor, this.shapeColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="150" height="150"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${this.shapeColor}" />
            <text x="75" y="95" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

// render triangle
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super (this.text, this.textColor, this.shapeColor)
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = {Shape, Circle, Triangle, Square};