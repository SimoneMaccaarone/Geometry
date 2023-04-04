
//-------------- POINT ---------------------
const point1a = new Point(1, 1);
const point2a = new Point(4, 5);

console.log(point1a);
console.log(point2a);
//-------------- SEGMENT--------------------
const segment1 = new Segment(point1a, point2a);

const segment2 = Segment.fromPointsCoordinates(0, 1, 3, 5);

console.log(segment1);
console.log(segment2);
//------------- TRIANGLE-------------------
const point1 = new Point(1, 1);
const point2 = new Point(1, 3);
const point3 = new Point(1, 3);
const point4 = new Point(3, 1);
const point5 = new Point(3, 1);
const point6 = new Point(1, 1);

const triangle = Triangle.fromSegmentCoordinates(point1,point2,point3,point5,point6)

// (1, 1, 1, 3, 1, 3, 3, 1, 3, 1, 1, 1)

console.log(Triangle.area);