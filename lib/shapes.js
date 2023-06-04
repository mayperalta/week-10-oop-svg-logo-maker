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
        return `<circle cx="100" cy="150" r="100"  height="300" width="300" fill="${this.color}" />`; 
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,20 0,300 200,300" width="300" height="300" fill="${this.color}" />`; 
    }
}

class Square extends Shape {
    render() {
        return `<rect x="0" width="200" height="200" fill="${this.color}" />`; 
       
    }
}

module.exports = {Circle, Triangle, Square};