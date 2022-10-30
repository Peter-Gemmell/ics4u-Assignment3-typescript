/**
 * index (1) prints triangle parts
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-27
 */

import Triangle from './Triangle'

console.log('')

const testTriangle1 = new Triangle(3, 4, 5)
console.log('Created a 3 mm by 4 mm by 5 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle1.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle1.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle1.getArea().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle1.getTriangleType())
console.log(' → Angle 1: ' + testTriangle1.getAngle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle1.getAngle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle1.getAngle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle1.getHeight(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle1.getHeight(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle1.getHeight(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle1.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle1.getcircumRadius().toFixed(4) +
    ' mm'
)
console.log('')

const testTriangle2 = new Triangle(3, 3, 3)
console.log('Created a 3 mm by 3 mm by 3 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle2.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle2.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle2.getArea().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle2.getTriangleType())
console.log(' → Angle 1: ' + testTriangle2.getAngle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle2.getAngle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle2.getAngle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle2.getHeight(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle2.getHeight(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle2.getHeight(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle2.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle2.getcircumRadius().toFixed(4) +
    ' mm'
)
console.log('')

const testTriangle3 = new Triangle(3, 4, 4)
console.log('Created a 3 mm by 4 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle3.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle3.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle3.getArea().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle3.getTriangleType())
console.log(' → Angle 1: ' + testTriangle3.getAngle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle3.getAngle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle3.getAngle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle3.getHeight(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle3.getHeight(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle3.getHeight(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle3.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle3.getcircumRadius().toFixed(4) +
    ' mm'
)
console.log('')

const testTriangle4 = new Triangle(2, 3, 4)
console.log('Created a 2 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle4.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle4.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle4.getArea().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle4.getTriangleType())
console.log(' → Angle 1: ' + testTriangle4.getAngle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle4.getAngle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle4.getAngle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle4.getHeight(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle4.getHeight(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle4.getHeight(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle4.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle4.getcircumRadius().toFixed(4) +
    ' mm'
)
console.log('')

const testTriangle5 = new Triangle(23, 4, 6)
console.log('Created a 23 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle5.isValid().toString())
console.log(
  ' → Semiperimeter: ' + testTriangle5.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log(' → Area: ' + testTriangle5.getArea().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle5.getTriangleType())
console.log(' → Angle 1: ' + testTriangle5.getAngle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle5.getAngle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle5.getAngle(3).toFixed(4) + ' rad')
console.log(' → Height 1: ' + testTriangle5.getHeight(1).toFixed(4) + ' mm')
console.log(' → Height 2: ' + testTriangle5.getHeight(2).toFixed(4) + ' mm')
console.log(' → Height 3: ' + testTriangle5.getHeight(3).toFixed(4) + ' mm')
console.log(
  ' → Inner circle radius: ' +
    testTriangle5.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  ' → Circumcircle radius: ' +
    testTriangle5.getcircumRadius().toFixed(4) +
    ' mm'
)
console.log('')

console.log('\nDone.')
