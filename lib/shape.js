class Shape {
    constructor(text, textColor, shapeColor) {
        this.text= text;
        this.textColor= textColor;
        this.shapeColor= shapeColor;
        }

        }
// const circle = new Shape()
// circle.setColor()
class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG </${this.text}</svg>`

    }
}


class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" pathid="rect" x="100" y="200" width="200" height="30" fill="${this.color}"/>`
    }
}



class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}/>`
    }
}



module.exports = { Circle, Square, Triangle }