class Shape {

    constructor(){
        this.color =''
    }
    setColor(color){
this.color=(color);
    }
}

class Circle extends Shape{ }




class Square extends Shape{ }



class Triangle extends Shape{ }



module.exports(Circle, Square, Triangle)