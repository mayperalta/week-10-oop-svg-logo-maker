// initializes color and sets color value 
class Shape {
    constructor(){
        this.color='';
    }
    setColor(color) {
        this.color=(color);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="70" height="300" width="300" fill="${this.color}" />`; 
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="250,30 100,300 400,300" width="300" height="300" fill="${this.color}" />`; 
    }
}

class Square extends Shape {
    render() {
        <rect x="100" width="300" height="300" fill="${this.color}" />
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;