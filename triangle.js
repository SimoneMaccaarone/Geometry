class Triangle {

    // creazione generale del triangolo. SENZA ISTRUZIONI E POSIZIONI DEI SEGMENTI
    constructor(segmentA, segmentB, segmentC) {
        this.segmentA = segmentA
        this.segmentB = segmentB
        this.segmentC = segmentC
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
        console.log(perimetro);

        const resultPippo = sP * resultA * resultB * resultC
        const resultFinale = Math.sqrt((resultPippo))
        return resultFinale

    }

}