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
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

    }
}


class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/><text x="125" y="110" text-anchor="middle" font-family="sans-serif" font-size="50" fill= "${this.textColor}">${this.text}</text></svg>`
    }
}



class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /> <text x="150" y="125" text-anchor="middle" font-family="sans-serif" font-size="40" fill= "${this.textColor}">${this.text}</text></svg>`
}
}


module.exports = { Circle, Square, Triangle }