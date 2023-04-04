
class Segment {

    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    static fromPointsCoordinates(xA, yA, xB, yB) {   //questa è definita FACTORY, perchè fabbrica qualcosa
        const pointA = new Point(xA, yA);
        const pointB = new Point(xB, yB);
        return new Segment(pointA, pointB);
    }

    get length() {
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y
        const squareDX = deltaX ** 2;
        const squareDY = deltaY ** 2;
        const squareSum = squareDX + squareDY;
        return Math.sqrt((squareSum))
    }

}