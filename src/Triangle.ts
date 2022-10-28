/**
 * Triangle class (2)
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-10-17
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number
  private readonly angleA: number
  private readonly angleB: number
  private readonly angleC: number
  private readonly perimeter: number
  private readonly semiPerimeter: number
  private readonly area: number
  // private incircle: number
  // private circumference: number
  private readonly triangleType: string
  private readonly onesquared: number
  private readonly twosquared: number
  private readonly threesquared: number
  oneEighty = 180
  degrees = this.oneEighty / 3.14

  constructor(length1: number, length2: number, length3: number) {
    this.side1 = length1
    this.side2 = length2
    this.side3 = length3

    // perimeter calculation
    this.perimeter = this.side1 + this.side2 + this.side3

    // semiperimeter calculation
    this.semiPerimeter = this.perimeter / 2

    // area calculation
    this.area = Math.sqrt(
      this.semiPerimeter *
        (this.semiPerimeter - this.side1) *
        (this.semiPerimeter - this.side2) *
        (this.semiPerimeter - this.side3)
    )

    // determine triangle type
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      this.triangleType = 'Equilateral'
    } else if (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3
    ) {
      this.triangleType = 'Isoceles'
    } else {
      this.triangleType = 'Scalene'
    }

    // squares all sides for angle calculation
    this.onesquared = Math.pow(this.side1, 2)
    this.twosquared = Math.pow(this.side2, 2)
    this.threesquared = Math.pow(this.side3, 2)

    // angelA caclulation
    this.angleA =
      Math.acos(
        (this.twosquared + this.threesquared - this.onesquared) /
          (2 * this.side2 * this.side3)
      ) * this.degrees
    this.angleB =
      Math.acos(
        (this.onesquared + this.threesquared - this.twosquared) /
          (2 * this.side1 * this.side3)
      ) * this.degrees
    this.angleC =
      Math.acos(
        (this.onesquared + this.twosquared - this.threesquared) /
          (2 * this.side1 * this.side2)
      ) * this.degrees
  }

  // getters and setters
  status(): void {
    console.log(`
    Perimeter: ${this.perimeter}
    SemiPeriemter: ${this.semiPerimeter}
    Area: ${this.area}
    This Triangle is a ${this.triangleType}
    Angle a: ${this.angleA}
    Angle b: ${this.angleB}
    Angle c: ${this.angleC}
    `)
  }

  // Getter perimeter
  getPerimeter(): number {
    return this.perimeter
  }

  // Getter semip
  getSemiperimeter(): number {
    return this.semiPerimeter
  }

  // Getter area
  getArea(): number {
    return this.area
  }

  // type of triangle
  getTriangleType(): string {
    return this.triangleType
  }

  // Getter for AngleA
  getAngleA(): number {
    return this.angleA
  }

  // Getter for AngleB
  getAngleB(): number {
    return this.angleB
  }

  // Getter for AngleC
  getAngleC(): number {
    return this.angleC
  }
}

export = Triangle
