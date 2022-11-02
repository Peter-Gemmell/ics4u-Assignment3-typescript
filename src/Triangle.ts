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

  constructor(length1: number, length2: number, length3: number) {
    this.side1 = length1
    this.side2 = length2
    this.side3 = length3
  }

  // checks if triangle is valid
  isValid(): boolean {
    if (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    ) {
      return true
    }
    return false
  }

  // getter side1
  getSide1(): number {
    return this.side1
  }

  // getter side2
  getSide2(): number {
    return this.side2
  }

  // getter side3
  getSide3(): number {
    return this.side3
  }

  // private perimeter method
  private getPerimeter(): number {
    return this.side1 + this.side2 + this.side3
  }

  // method semip
  getSemiPerimeter(): number {
    return this.getPerimeter() / 2
  }

  // method area
  getArea(): number {
    const semiP = this.getSemiPerimeter()
    return Math.sqrt(
      semiP * (semiP - this.side1) * (semiP - this.side2) * (semiP - this.side3)
    )
  }

  // method to find type of triangle
  getTriangleType(): string {
    let triangleType
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      triangleType = 'Equilateral'
    } else if (
      this.side1 ** 2 + this.side2 ** 2 === this.side3 ** 2 ||
      this.side3 ** 2 + this.side1 ** 2 === this.side2 ** 2 ||
      this.side2 ** 2 + this.side3 ** 2 === this.side1 ** 2
    ) {
      triangleType = 'Right Angle'
    } else if (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3
    ) {
      triangleType = 'Isoceles'
    } else {
      triangleType = 'Scalene'
    }
    return triangleType
  }

  // method for Angles
  getAngle(side: number): number {
    let angle: number
    const onesquared = Math.pow(this.side1, 2)
    const twosquared = Math.pow(this.side2, 2)
    const threesquared = Math.pow(this.side3, 2)
    if (side === 1) {
      angle = Math.acos(
        (twosquared + threesquared - onesquared) / (2 * this.side2 * this.side3)
      )
    } else if (side === 2) {
      angle = Math.acos(
        (onesquared + threesquared - twosquared) / (2 * this.side1 * this.side3)
      )
    } else {
      angle = Math.acos(
        (onesquared + twosquared - threesquared) / (2 * this.side1 * this.side2)
      )
    }
    return angle
  }

  // method for heigths
  getHeight(side: number): number {
    let height: number
    const area: number = this.getArea()
    if (side === 1) {
      height = (2 * area) / this.side1
    } else if (side === 2) {
      height = (2 * area) / this.side2
    } else {
      height = (2 * area) / this.side3
    }
    return height
  }

  // method inner circle radius
  getinnerCircleRadius(): number {
    return this.getArea() / this.getSemiPerimeter()
  }

  // method circumradius
  getcircumRadius(): number {
    return (this.side1 * this.side2 * this.side3) / (4 * this.getArea())
  }
}

export = Triangle
