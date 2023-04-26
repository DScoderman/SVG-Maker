const { Circle, Square,Triangle } = require("./shape");

describe("Circle", () => {
    it("should render SVG for a circle.", () => {
        const uut = new Circle("test", "blue", "red")
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="red"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">test</text></svg>`
        const actual = uut.render();
        expect(actual).toEqual(expected);
    })
});

describe("Square", () => {
    it("should render SVG for a square.", () => {
        const uut = new Square("test", "blue", "red")
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="red"/><text x="125" y="110" text-anchor="middle" font-family="sans-serif" font-size="50" fill= "blue">test</text></svg>`
        const actual = uut.render();
        expect(actual).toEqual(expected);
    })
});

describe("Triangle", () => {
    it("should render SVG for a triangle.", () => {
        const uut = new Triangle("test", "blue", "red")
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="red" /> <text x="150" y="125" text-anchor="middle" font-family="sans-serif" font-size="40" fill= "blue">test</text></svg>`
        const actual = uut.render();
        expect(actual).toEqual(expected);
    })
});