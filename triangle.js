class Triangle {

    // creazione generale del triangolo. SENZA ISTRUZIONI E PaicOSIZIONI DEI SEGMENTI
    constructor(segmentA, segmentB, segmentC) {
        this.segmentA = segmentA;
        this.segmentB = segmentB;
        this.segmentC = segmentC;
    }

    static fromSegmentCoordinates(xA, yA, xB, yB, xC, yC) {
        const segmentA = new Segment(xA, yA);
        const segmentB = new Segment(xB, yB);
        const segmentC = new Segment(xC, yC);
        return new Triangle(segmentA, segmentB, segmentC);
    }

    get area() {
        const perimetro = this.segmentA.length + this.segmentB.length + this.segmentC.length;
        const sP = perimetro / 2
        const resultA = sP - this.segmentA.length;
        const resultB = sP - this.segmentB.length;
        const resultC = sP - this.segmentC.length;
        console.log('Il PERIMETRO del Triangolo è: ', perimetro);

        const resultPippo = sP * resultA * resultB * resultC;
        const resultFinale = Math.sqrt((resultPippo));
        return resultFinale;
    }
}

class Triangle2 {

    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;

        this.segmentAB = new Segment(this.pointA, this.pointB);
        this.segmentBC = new Segment(this.pointB, this.pointC);
        this.segmentCA = new Segment(this.pointC, this.pointA);
    }

    calculatePerimeter() {
        return this.segmentAB.length, this.segmentBC.length, this.segmentCA.length;
    }

    calculateSemiPerimeter() {
        return this.calculatePerimeter() / 2;
    }

    calculateArea() {
        const semiPerimeterMinusSegmentAB = this.calculatePerimeter() - this.segmentAB.length
        const semiPerimeterMinusSegmentBC = this.calculatePerimeter() - this.segmentBC.length
        const semiPerimeterMinusSegmentCA = this.calculatePerimeter() - this.segmentCA.length

        const product = this.calculateSemiPerimeter() *
                        semiPerimeterMinusSegmentAB *
                        semiPerimeterMinusSegmentBC *
                        semiPerimeterMinusSegmentCA;
        const area = Math.sqrt(product);
        return area;

    }
}

class Triangle3 {

    constructor(pointA, pointB, pointC) {
        this.segmentAB = new Segment(pointA, pointB);
        this.segmentBC = new Segment(pointB, pointC);
        this.segmentCA = new Segment(pointC, pointA);
    }
    get pointA() {
        return this.segmentAB.pointA;
    }
    get pointB() {
        return this.segmentAB.pointB;
    }
    get pointC() {
        return this.segmentBC.pointC;
    }
}

class Triangle4 {

    constructor(pointA, pointB, pointC) {
        this.pointA = pointA
        this.pointB = pointB
        this.pointC = pointC

    }
    get pointAB() {
        return new Segment(this.pointA, this.pointB);
    }
    get pointBC() {
        return new Segment(this.pointB, this.pointC);
    }
    get pointCA() {
        return new Segment(this.pointC, this.pointA);
    }
}