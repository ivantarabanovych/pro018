class Shape {
  calculateArea() {
    console.log("Shape does not indificate!");
    return 0;
  }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }


calculateArea() {
    const area = Math.PI * Math.pow(this.radius, 2);
    console.log(`the area of ​​a circle with ${this.radius} radius equal to ${area.toFixed(2)}`);
    return area;
}
}

const circle1 = new Circle(18);

circle1.calculateArea();
